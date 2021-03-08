from typing import Dict, List

from database import DataBase

from thematic_group.data import Group
from thematic_group.data import Thematic


db = DataBase()

def get_group(name: str) -> List[Dict[str, str]]:
    '''Obtiene un grupo temático de la base de datos.

    Args:
        name (str): nombre del grupo temático

    Returns:
        List[Dict[str, str]]: listado de las temáticas
    '''
    data = db.get_group(name)
    group = Group(name)

    for thematic in data:
        group.add(Thematic(**thematic))

    return [theme._asdict() for theme in group.get_thematic()]
