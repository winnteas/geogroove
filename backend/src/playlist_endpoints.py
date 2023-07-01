from endpoints import get_request

def create_playlist(user_id, playlist_name):
  url=f"https://api.spotify.com/v1/users/{user_id}/playlists"
  body={
    "name": playlist_name,
  }
  return get_request(url, body)

def add_to_playlist(playlist_id, tracks):
  url=f"https://api.spotify.com/v1/playlists/{playlist_id}/tracks"
  body={
    "uris": [tracks],
  }
  return get_request(url, body)