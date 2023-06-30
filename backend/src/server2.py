# to run: flask --app server2 run

from flask import Flask, redirect, request
from .location import retrieve
import json
import random
import string
import urllib.parse

# .env
import os
from dotenv import load_dotenv
load_dotenv()
CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")

FRONTEND_URL = "http://localhost:3000/callback/"

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/location/retrieve/v1", methods=['GET'])
def location_retrieve():
    return json.dumps(retrieve())

@app.route("/prompt_auth", methods=['GET'])
def prompt_auth():
    state = generate_random_string(16)
    scope = 'user-read-private user-read-email'

    params = {
        'response_type': 'code',
        'client_id': CLIENT_ID,
        'scope': scope,
        'redirect_uri': FRONTEND_URL,
        'state': state
    }

    query_string = urllib.parse.urlencode(params)
    authorization_url = f'https://accounts.spotify.com/authorize?client_id={CLIENT_ID}&redirect_uri={FRONTEND_URL}' + query_string

    return redirect(authorization_url)

def generate_random_string(length):
    letters = string.ascii_letters + string.digits
    return ''.join(random.choice(letters) for _ in range(length))
