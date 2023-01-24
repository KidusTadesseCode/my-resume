import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
    // value:JSON.parse(localStorage.getItem("theme"))? true:false
}

export const darkModeChanger = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    changeToDarkMode: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeToDarkMode } = darkModeChanger.actions

export default darkModeChanger.reducer