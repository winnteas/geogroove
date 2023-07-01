import requests, json

import access_token

def get_request(url, body):
  resp = requests.get(
    url,
    headers={
        "Authorization": f"Bearer {access_token.get_access_token()}"
    },
    data=body
  )
  return resp.json()