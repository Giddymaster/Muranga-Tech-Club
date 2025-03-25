import { createSlice } from "@reduxjs/toolkit";
import { leaders } from "../../utils/data/leadersData";

const initialState = {
  leaders: leaders,
  status: "idle",
  error: null,
};

const leadersSlice = createSlice({
  name: "leaders",
  initialState,
  reducers: {
    leaderAdded: (state, action) => {
      state.leaders.push(action.payload);
    },
    leaderUpdated: (state, action) => {
      const { id, ...changes } = action.payload;
      const existingLeader = state.leaders.find((leader) => leader.id === id);
      if (existingLeader) {
        Object.assign(existingLeader, changes);
      }
    },
  },
});

export const { leaderAdded, leaderUpdated } = leadersSlice.actions;
export default leadersSlice.reducer;

export const selectAllLeaders = (state) => state.leaders.leaders;
export const selectLeaderById = (state, leaderId) =>
  state.leaders.leaders.find((leader) => leader.id === leaderId);
