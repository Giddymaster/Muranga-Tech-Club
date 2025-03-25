import { createSlice } from "@reduxjs/toolkit";
import { tracks } from "../../utils/data/tracksData";

const initialState = {
  tracks: tracks,
  registrations: [],
  status: "idle",
  error: null,
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    registrationAdded: (state, action) => {
      state.registrations.push(action.payload);
    },
    trackUpdated: (state, action) => {
      const { id, ...changes } = action.payload;
      const existingTrack = state.tracks.find((track) => track.id === id);
      if (existingTrack) {
        Object.assign(existingTrack, changes);
      }
    },
  },
});

export const { registrationAdded, trackUpdated } = tracksSlice.actions;
export default tracksSlice.reducer;

export const selectAllTracks = (state) => state.tracks.tracks;
export const selectTrackById = (state, trackId) =>
  state.tracks.tracks.find((track) => track.id === trackId);
