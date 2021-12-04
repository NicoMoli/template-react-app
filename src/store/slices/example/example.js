import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 4,
}

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions, reducer } = exampleSlice

export default reducer

export const { increment } = actions