import requests, json

import access_token

def create_playlist(user_id, playlist_name):
  url=f"https://api.spotify.com/v1/users/{user_id}/playlists"
  resp = requests.get(
    url,
    headers={
        "Authorization": f"Bearer {access_token.get_access_token()}"
    },
    data={
        "name": playlist_name,
    }
  )
  return resp.json()