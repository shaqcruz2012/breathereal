import requests 
import base64
import json


def getToken():
    # Step 1 - Authorization 
    url = "https://accounts.spotify.com/api/token"
    headers = {}
    data = {}


# Encode as Base64
    message = f"{'1abc5eab32db46f4ae799d39abdf79ec'}:{'bcf425df50594439ad1ebc2c13603752'}"
    messageBytes = message.encode('ascii')
    base64Bytes = base64.b64encode(messageBytes)
    base64Message = base64Bytes.decode('ascii')


    headers['Authorization'] = f"Basic {base64Message}"
    data['grant_type'] = "client_credentials"

    r = requests.post(url, headers=headers, data=data)

    token = r.json()['access_token']
    return token

def searchTracks(token, searchInput):
    params = {'q': searchInput, 'type': 'track', 'limit': 4}
    headers = {'Authorization': f'Bearer {token}'}
    response = requests.get('https://api.spotify.com/v1/search', params=params, headers=headers)
    response = response.json()
    return response