import requests, json

from src.access_token import *

def get_requests(url, body):
  resp = requests.get(
    url,
    headers={
        "Authorization": f"Bearer {get_access_token()}"
    },
    params=body
  )
  return resp.json()

def post_requests(url, body):
  resp = requests.post(
    url,
    headers={
        "Authorization": f"Bearer {get_access_token()}"
    },
    data=body
  )
  return resp.json()

def put_requests(url, body):
  resp = requests.put(
    url,
    headers={
        "Authorization": f"Bearer {get_access_token()}"
    },
    data=body
  )
  return resp.json()