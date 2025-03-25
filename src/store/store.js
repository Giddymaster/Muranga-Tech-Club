import { configureStore } from "@reduxjs/toolkit";
import leadersReducer from "./slices/leadersSlice";
import tracksReducer from "./slices/tracksSlice";
import eventsReducer from "./slices/eventsSlice";

export const store = configureStore({
  reducer: {
    leaders: leadersReducer,
    tracks: tracksReducer,
    events: eventsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
