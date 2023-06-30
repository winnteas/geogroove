import sys
import signal
import time

import json
from flask import Flask, request, send_from_directory
from flask_cors import CORS
from src import location

from src import config
 
def quit_gracefully(*args):
    exit(0)

def defaultHandler(err):
    response = err.get_response()
    print('response', err, err.get_response())
    response.data = json.dumps({
        "code": err.code,
        "name": "System Error",
        "message": err.get_description(),
    })
    response.content_type = 'application/json'
    return response

APP = Flask(__name__, static_folder = '../static/', static_url_path='/static/')
CORS(APP)

APP.config['TRAP_HTTP_EXCEPTIONS'] = True
APP.register_error_handler(Exception, defaultHandler)

global conn
conn = None

########################################################################################
###                              HTTP ENDPOINTS                                     ####
########################################################################################

## TODO all the endpoints lol

## Stub for POST request (taken from a personal proj)
# @APP.route("/auth/logout/v1", methods=['POST'])
# def auth_logout():
#     data = request.get_json()
#     ret = auth.logout(data['token'])
    
#     return json.dumps(ret)

@APP.route("/location/retrieve/v1", methods=['GET'])
def location_retrieve():
    return json.dumps(location.retrieve())


if __name__ == "__main__":
    signal.signal(signal.SIGINT, quit_gracefully)
    APP.run(port=config.port)