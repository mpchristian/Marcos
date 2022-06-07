import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: {
    value: '',
  },
  reducers: {
    saveName: (state, { payload }) => {
      state.value = payload;
    }
  }
})

export const { saveName } = user.actions;

export default user.reducer;
