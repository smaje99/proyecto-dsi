from flask_pymongo import PyMongo, ObjectId


class DataBase:
    '''DataBase implementa el patrón Singleton,
    se encarga de la conexión y gestión de la
    base de datos y sus colecciones.
    '''

    __instance = dict()  # Instancia Singleton

    def __init__(self, app=None):
        self.__dict__ = DataBase.__instance
        if app:
            app.config['MONGO_URI'] = 'mongodb://localhost/seros'
            self._mongo = PyMongo(app)

    def load_db(self):
        '''Carga las colecciones de mongodb
        '''
        self._groups = self._mongo.db.ThematicGroups

    def get_group(self, name: str):
        '''Lista las temáticas de un grupo temático
        en base de datos.

        Args:
            name (str): nombre del grupo temático

        Returns:
            temáticas agrupadas
        '''
        result = self._groups.find_one({'name': name})
        return result['thematic']
