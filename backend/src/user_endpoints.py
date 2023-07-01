from src.endpoints_requests import get_requests

def get_user(user_id):
  url=f"https://api.spotify.com/v1/users/{user_id}"
  return get_requests(url, {})