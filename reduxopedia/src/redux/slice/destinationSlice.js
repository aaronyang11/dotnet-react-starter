import { createSlice } from "@reduxjs/toolkit"
import { resetReduxOPedia } from "../action/actions"

const initialState = () => {
  return {
    destinationList: [
      { name: "Hong Kong", days: 7, fact: "World's longes covered escalator" },
      { name: "Japan", days: 10, fact: "Japan is mostly mountains" },
      {
        name: "New Zealand",
        days: 14,
        fact: "last country in the world to be inhabited by humans",
      },
    ],
    destinationSelected: undefined,
  }
}

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia.toString(), (state, action) => {
      state.destinationSelected = undefined
    })
  },
})

export const destinationReducer = destinationSlice.reducer
export const { destinationClicked, resetDestination } = destinationSlice.actions
