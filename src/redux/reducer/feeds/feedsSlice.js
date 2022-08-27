import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const feedsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    getFeeds() {},
    setFeeds(state, action) {
      const userData = action.payload;
      return { ...state, ...userData };
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, getFeeds, setFeeds } = feedsSlice.actions;

export default feedsSlice.reducer;
