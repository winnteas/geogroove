import React from "react";

const initToken = undefined;
const initActivity = "driving";
const initCountryCode = "AU";
const initPlaylistName = "my playlist";
const initPlaylistDesc = "";
const initGenres = [];
const initPlaylistDuration = 1;

export const initialValue = {
    token: initToken,
    activity: initActivity,
    countryCode: initCountryCode,
    genres: initGenres,
    playlistName: initPlaylistName,
    playlistDesc: initPlaylistDesc,
    playlistDuration: initPlaylistDuration
}

export const Context = React.createContext({
    getters: initialValue
});
export const useContext = React.useContext;