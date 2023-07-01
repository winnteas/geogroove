from endpoints_requests import get_requests
import json

def search_item(query_str, type, market, limit, offset):
  url=f"https://api.spotify.com/v1/search?q={query_str}&type={type}&market={market}&limit={limit}&offset={offset}"
  return get_requests(url, {})

def get_markets():
  url=f"https://api.spotify.com/v1/markets"
  return get_requests(url, {})

def get_genres():
  url=f"https://api.spotify.com/v1/recommendations/available-genre-seeds"
  return get_requests(url, {})

# the prop body should be a JSON format containing all possible parameters within the following doc
# https://developer.spotify.com/documentation/web-api/reference/get-recommendations
# e.g. 
# {
#   'limit': 10,
#   'market': 'ES',
# }
# NOTE the following params are required:
# seed_artists, seed_genres, seed_tracks (up to 5 of a combination of these 3)
def get_recommendations(body):
  jsonObject = json.loads(body)
  params=''
  for key, value in jsonObject:
    if len(params) == 0:
      params += '?'
    else:
      params += '&'
    params += f'{key}={value}'
  url=f"https://api.spotify.com/v1/recommendations{params}"
  return get_requests(url, {})