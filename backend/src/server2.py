# to run: flask --app server2 run

from flask import Flask, request
from .location import retrieve
from .item_endpoints import *
from .playlist_endpoints import *
from .user_endpoints import *
import json

app = Flask(__name__)

@app.route("/<hi>")
def hello_world(hi):
    return f"<p>Hello, World!</p>{hi}"

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
def spotify_create_playlist():
    playlist_id = request.args.get('playlist_id')
    tracks = request.args.get('tracks')
    return json.dumps(create_playlist(playlist_id, tracks))

@app.route("/get/playlist/image", methods=['GET'])
def spotify_get_playlist_image():
    playlist_id = request.args.get('playlist_id')
    return json.dumps(create_playlist(playlist_id))

@app.route("/put/playlist/image", methods=['PUT'])
def spotify_change_playlist_image():
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

