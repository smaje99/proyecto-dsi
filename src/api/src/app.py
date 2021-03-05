from flask import Flask, jsonify
from flask_cors import CORS

from database import DataBase

from thematic_group.data import Group
from thematic_group.data import Thematic


app = Flask(__name__)

db = DataBase(app)

CORS(app)

db.load_db()


@app.route('/group/<name>', methods=['GET'])
def get_group(name: str):
    '''Obtiene un grupo temático de la base de datos.

    Args:
        name (str): nombre del grupo temático

    Returns:
        contenidos temáticos del grupo
    '''
    data = db.get_group(name)
    group = Group(name)

    for thematic in data:
        group.add(Thematic(**thematic))

    return jsonify([thematic._asdict() for thematic in group.get_thematic()])


if __name__ == '__main__':
    app.run(debug=True)
