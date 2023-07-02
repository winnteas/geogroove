import React from "react";

const initActivity = "driving";
const initCountryCode = "AU";
const initPlaylistName = "my playlist";
const initPlaylistDesc = "";
const initPlaylistDuration = 1;

export const initialValue = {
    activity: initActivity,
    countryCode: initCountryCode,
    playlistName: initPlaylistName,
    playlistDesc: initPlaylistDesc,
    playlistDuration: initPlaylistDuration
}

export const Context = React.createContext({
    getters: initialValue
});
export const useContext = React.useContext;