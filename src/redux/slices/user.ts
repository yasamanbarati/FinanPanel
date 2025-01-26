import { createSlice } from '@reduxjs/toolkit';
// utils

// ----------------------------------------------------------------------

const initialState = {
  email: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // START LOADING
    setUser(state, actions) {
      console.log('test', actions.payload);
      state.email = actions.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { setUser } = slice.actions;
