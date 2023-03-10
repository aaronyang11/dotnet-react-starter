import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "./slice/counterSlice"
import { destinationReducer } from "./slice/destinationSlice"
import {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} from "./slice/counterSlice"

import { destinationClicked } from "./slice/destinationSlice"

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  },
})

console.log(store.getState())

export {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  destinationClicked,
}
