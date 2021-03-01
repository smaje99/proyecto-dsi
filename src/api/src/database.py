from flask_mongo import PyMongo, ObjectId


class DataBase:
    def __init__(self, app):
        app.config['MONGO_URI'] = 'mongodb://localhost/seros'
        self._mongo = PyMongo(app)

    def load_db(self):
        self._groups = self.mongo.db.ThematicGroups
