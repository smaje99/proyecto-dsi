from flask import Flask
from flask_cors import CORS

from database import DataBase


app = Flask(__name__)

db = DataBase(app)

CORS(app)

db.load_db()


@app.route('/', methods=['GET'])
def inicio():
    pass


if __name__ == '__main__':
    app.run(debug=True)
