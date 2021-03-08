from flask import Flask, jsonify
from flask_cors import CORS

from database import DataBase
import facade


app = Flask(__name__)

db = DataBase(app)

CORS(app)

db.load_db()


@app.route('/group/<name>', methods=['GET'])
def get_group(name: str):
    '''Obtiene un grupo temático.

    Args:
        name (str): nombre del grupo temático

    Returns:
        contenidos de las temáticas del grupo
    '''
    return jsonify(facade.get_group(name))


if __name__ == '__main__':
    app.run(debug=True)
