# to run: flask --app server2 run

from flask import Flask, redirect, request, url_for, session, jsonify, make_response
from flask_cors import CORS, cross_origin
import spotipy
from spotipy.oauth2 import SpotifyOAuth

from src.location import retrieve
from src.item_endpoints import *
from src.playlist_endpoints import *
from src.user_endpoints import *
import json
import random
import string
import urllib.parse
import secrets

# .env
import os
from dotenv import load_dotenv
load_dotenv()
CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")

FRONTEND_URL = "http://localhost:19006/"

app = Flask(__name__)
# CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key = secrets.token_hex(16)
app.config['SESSION_COOKIE_NAME'] = 'Brians Cookie'
TOKEN_INFO = "token_info"

@app.route("/")
def hello_world():
    return f"<p>Hello, World!</p>"

##### AUTH ENDPOINTS #####

# usage:
# /auth/login
# /auth/get_token
# /auth/logout

scope_options = "user-library-read playlist-modify-private playlist-modify-public user-top-read user-read-recently-played user-library-read user-library-modify playlist-read-private playlist-read-collaborative"

def create_spotify_oauth():
    return SpotifyOAuth(
        client_id=CLIENT_ID,
        client_secret=CLIENT_SECRET,
        redirect_uri=url_for('redirect_page', _external=True),
        scope=scope_options
    )

@app.route("/auth/login")
# @cross_origin()
def auth_prompt():
    session.clear()
    sp_oauth = create_spotify_oauth()
    auth_url = sp_oauth.get_authorize_url()
    print(auth_url)
    return redirect(auth_url)

@app.route("/get_access_token_from_code/<code>")
def get_access_token_from_code(code):
    sp_oauth = create_spotify_oauth()
    session.clear()
    token_info = sp_oauth.get_access_token(code)
    return token_info['access_token']

@app.route("/redirect")
# @cross_origin()
def redirect_page():
    sp_oauth = create_spotify_oauth()
    session.clear()
    code = request.args.get('code')
    token_info = sp_oauth.get_access_token(code)
    session[TOKEN_INFO] = token_info
    return redirect(FRONTEND_URL)

def get_access_token():
    token_info = session.get(TOKEN_INFO, None)
    return token_info['access_token']

@app.route("/auth/logout")
def auth_logout():
    session.pop(TOKEN_INFO, None)
    session.clear()
    spotify_logout_url = "https://accounts.spotify.com/logout"
    next_url = "http://localhost:5000/"
    logout_url = f"{spotify_logout_url}?client_id={CLIENT_ID}&redirect_uri={next_url}"
    return redirect(logout_url)

@app.route("/auth/get_token")
def auth_get_token():
    token_info = session.get(TOKEN_INFO, None)
    return token_info['access_token']

# @app.route("/get_access_token")
# def get_access_token():
#     token_info = get_access_token()
#     return token_info['access_token']
#     sp = spotipy.Spotify(auth=token_info['access_token'])
#     return sp.current_user_saved_tracks(limit=50, offset=0)



##### ITEM ENDPOINTS #####

@app.route("/search/item", methods=['GET'])
def spotify_search_item():
    query_str = request.args.get('query_str')
    type = request.args.get('type')
    market = request.args.get('market')
    limit = request.args.get('limit')
    offset = request.args.get('offset')
    return json.dumps(search_item(query_str, type, market, limit, offset))

@app.route("/get/markets", methods=['GET'])
def spotify_get_markets():
    return json.dumps(get_markets())

@app.route("/get/genres", methods=['GET'])
def spotify_get_genres():
    return json.dumps(get_genres())

@app.route("/get/recommendations", methods=['GET'])
def spotify_get_recommendations():
    body = request.args.get('body')
    return json.dumps(get_recommendations(body))

##### ITEM ENDPOINTS #####

##### PLAYLIST ENDPOINTS #####

@app.route("/post/playlist", methods=['POST'])
def spotify_create_playlist():
    user_id = request.args.get('user_id')
    playlist_name = request.args.get('playlist_name')
    return json.dumps(create_playlist(user_id, playlist_name))

@app.route("/post/track", methods=['POST'])
def spotify_create_playlist_track():
    playlist_id = request.args.get('playlist_id')
    tracks = request.args.get('tracks')
    return json.dumps(create_playlist(playlist_id, tracks))

@app.route("/get/playlist/image", methods=['GET'])
def spotify_get_playlist_image_get():
    playlist_id = request.args.get('playlist_id')
    return json.dumps(create_playlist(playlist_id))

@app.route("/put/playlist/image", methods=['PUT'])
def spotify_change_playlist_image_put():
    playlist_id = request.args.get('playlist_id')
    return json.dumps(create_playlist(playlist_id))

@app.route("/put/playlist/name", methods=['PUT'])
def spotify_change_playlist_image():
    playlist_id = request.args.get('playlist_id')
    name = request.args.get('name')
    return json.dumps(change_playlist_name(playlist_id, name))

##### PLAYLIST ENDPOINTS #####

##### USER ENDPOINTS #####

@app.route("/get/user", methods=['GET'])
def spotify_get_user():
    user_id = request.args.get('user_id')
    return json.dumps(get_user(user_id))

##### USER ENDPOINTS #####


@app.route("/location/retrieve/v1", methods=['GET'])
def location_retrieve():
    return json.dumps(retrieve())

if __name__ == '__main__':
    app.run(host="localhost", port=5000)