from endpoints_requests import get_requests, post_requests, put_requests

def create_playlist(user_id, playlist_name):
  url=f"https://api.spotify.com/v1/users/{user_id}/playlists"
  body={
    "name": playlist_name,
  }
  return post_requests(url, body)

def add_to_playlist(playlist_id, tracks):
  url=f"https://api.spotify.com/v1/playlists/{playlist_id}/tracks"
  body={
    "uris": [tracks],
  }
  return post_requests(url, body)
  
def get_playlist_image(playlist_id):
  url=f"https://api.spotify.com/v1/playlists/{playlist_id}/images"
  return get_requests(url, {})

def change_playlist_image(playlist_id, image):
  url=f"https://api.spotify.com/v1/playlists/{playlist_id}/images"
  return put_requests(url, image)

def change_playlist_name(playlist_id, name):
  url=f"https://api.spotify.com/v1/playlists/{playlist_id}"
  body={
    "name": name,
  }
  return put_requests(url, body)