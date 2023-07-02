import axios from 'axios';
import queryString from 'query-string';
export const getToken = async (data, headers) => {
  const response = await axios
    .post(
      "https://accounts.spotify.com/api/token",
      queryString.stringify(data),
      headers
    )
    .catch((error) => {
      console.log(error);
    });
  setAuthToken(response['data']['access_token'])
};

export const getCurrentUser = async (headers) => {
  const response = await axios
    .get(
      "https://api.spotify.com/v1/me",
      headers
    )
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const createPlaylist = async (userId, data, headers) => {
  await axios
    .post(
      "https://api.spotify.com/v1/users/" + userId + "/playlists",
      queryString.stringify(data),
      headers
    )
    .catch((error) => {
      console.log(error);
    });
};

export const addPlaylistImage = async (playlistId, data, headers) => {
  await axios
    .put(
      "https://api.spotify.com/v1/playlists/" + playlistId + "/images",
      queryString.stringify(data),
      headers
    )
    .catch((error) => {
      console.log(error);
    });
};

export const searchItem = async (data, headers) => {
  const response = await axios
    .get(
      "https://api.spotify.com/v1/search" + data,
      queryString.stringify(data),
      headers
    )
    .catch((error) => {
      console.log(error);
    });
};

export const addItem = async (playlistId, data, headers) => {
  await axios
    .post(
      "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks",
      queryString.stringify(data),
      headers
    )
    .catch((error) => {
      console.log(error);
    });
};