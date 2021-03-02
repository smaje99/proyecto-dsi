from flask_pymongo import PyMongo, ObjectId


class DataBase:
    def __init__(self, app):
        app.config['MONGO_URI'] = 'mongodb://localhost/seros'
        self._mongo = PyMongo(app)

    def load_db(self):
        '''Carga las colecciones de mongodb
        '''
        self._groups = self._mongo.db.ThematicGroups

    def get_group(self, name: str):
        '''Lista las temáticas de un grupo temático.

        Args:
            name (str): nombre del grupo temático

        Returns:
            Contenido temático agrupado
        '''
        result = self._groups.find_one({'name': name})
        return result['thematic']
