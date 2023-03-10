import { createSlice } from "@reduxjs/toolkit"
import { resetDestination } from "./destinationSlice"

const initialState = { count: 10 }

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementMultiplier: (state, action) => {
      state.count += action.payload
    },
    decrementMultiplier: (state, action) => {
      state.count -= action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetDestination.toString(), (state, action) => {
      state.count = 10
    })
  },
})

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  resetCounter,
} = counterSlice.actions
export const counterReducer = counterSlice.reducer
