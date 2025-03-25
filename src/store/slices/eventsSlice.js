import { createSlice } from "@reduxjs/toolkit";
import { events } from "../../utils/data/eventsData";

const initialState = {
  events: events,
  status: "idle",
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventAdded: (state, action) => {
      state.events.push(action.payload);
    },
    eventUpdated: (state, action) => {
      const { id, ...changes } = action.payload;
      const existingEvent = state.events.find((event) => event.id === id);
      if (existingEvent) {
        Object.assign(existingEvent, changes);
      }
    },
  },
});

export const { eventAdded, eventUpdated } = eventsSlice.actions;
export default eventsSlice.reducer;

export const selectAllEvents = (state) => state.events.events;
export const selectEventById = (state, eventId) =>
  state.events.events.find((event) => event.id === eventId);
