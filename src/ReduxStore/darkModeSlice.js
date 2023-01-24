import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:JSON.parse(localStorage.getItem("theme"))
}

export const darkModeChanger = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    changeToDarkMode: (state, action) => {
      localStorage.setItem('theme', JSON.stringify(action.payload));
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeToDarkMode } = darkModeChanger.actions

export default darkModeChanger.reducer