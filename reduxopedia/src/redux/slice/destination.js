import { createSlice } from "@reduxjs/toolkit"

const initialState = () => {
  return {
    destination: [
      { name: "Hong Kong", days: 7, fact: "World's longes covered escalator" },
      { name: "Japan", days: 10, fact: "Japan is mostly mountains" },
      {
        name: "New Zealand",
        days: 14,
        fact: "last country in the world to be inhabited by humans",
      },
    ],
  }
}

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {},
})

export const destinationReducer = destinationSlice.reducer
