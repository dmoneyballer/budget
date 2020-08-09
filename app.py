from flask import Flask
from json import loads
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/')
@cross_origin()
def hello_world():
    with open('state.json') as rf:
        t = loads(rf.read())
        return t
    return 'yes sir there was an error opening the json filessz'

@app.route('/info')
def service():
    with open('state.json') as rf:
        t = loads(rf.read())
        return f'yes sir {t}'
    return 'yes sir'
