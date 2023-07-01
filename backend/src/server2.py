# to run: flask --app server2 run

from flask import Flask
from .location import retrieve
import json

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/location/retrieve/v1", methods=['GET'])
def location_retrieve():
    return json.dumps(retrieve())

