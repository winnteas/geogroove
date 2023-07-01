import requests, json

import access_token

def get_profile():
    token = access_token.get_access_token()
    print(token)
    resp = requests.get(
        url = "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy",
        headers={
            "Authorization": f"Bearer {token}"
        }
    )
    
    return resp.json()
    
if __name__ == "__main__":
    # print(access_token.get_access_token())
    print(json.dumps(get_profile()))