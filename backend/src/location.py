import requests

from ipstack import GeoLookup
import json


## Retrieve user's current location
def retrieve():
    ## TODO change access token for demo
    ## (only have 100 api calls on free acc :(( )
    geo_lookup = GeoLookup("7c2e4b91e54c593619785574c72e5984")
    
    
    return geo_lookup.get_own_location()

if __name__ == "__main__":
    location = retrieve()
    print(f"{location['city']}, {location['region_name']}, {location['country_name']} ")