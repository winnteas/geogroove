import requests, json

import access_token

# auth code AQASis4Yzw7OuDPIGkKQH_VVYuFid1kO8Ik3z_DrS2KA86XxrkYisJmDBGWf98V1Gt-T3nB8UnGqy8xNn_lQWpnPp6qHvswGDwtKeRWC0p3E6Mlqq85mEA96p83EVnWNNyS-RT9-dsrdJnokzAUZEZ9t87dhehTi61cJ38Ny0tFhNth7sp3TXbOpvsiea6ZDJbpQq5nuloJGZupP4vdQw3M6kILJo-ZVs-foTFhhk3ry_PR-rdrefpYgm5AplpQoP7qQDaZjjpKEbgyol0vH_G8JrOUp8xRbjnL9cvWMGiK_Sq9G52981vOYTAnXjyEQsk2PgoDIByNeTbtLE240Rsbn818hJ-yoQCHc8oxrpu7yNeZwQJy4yALAI0jGcQoYhwv3IT-7BQnsXY54jYrjTtpirr3ZktxhWoY5RiI80twCOhI

def get_profile():
    token = 'BQA04wowK1nPbW8SfZ1VL8bIYP-sQrkIYtcEhebrSxL9sbPSGeeIwD_tEZ7PRYRJfL28Av273sSdZSTMo_S4NhvS5k7ckQ2MYRWfshPhV7R5NR_Gt3x3p2CWSY_tWaVMlv_VgfLvYIujgu9Wley2wp0xqQA4Tn-vRi21vD1Dk0SECnaQX835wA__1KZvSto8u_wkh8oAGzIrg0qkcB1o8R-9lMqp1jdi5i0w3wittiM5JIsrJJLT5iFqhp3rhgp0OTRte0isxFzkLU87sczBws4eOc_kDVaQxa-B731FLCGpZw'
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