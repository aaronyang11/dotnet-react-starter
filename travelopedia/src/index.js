import React from "react"
import ReactDOM from "react-dom/client"
import DestinationIndex from "./components/DestinationIndex"
import Header from "./layout/Header"
import { destinationApi } from "./api/destinationApi"
import { Provider } from "react-redux"
import { store } from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <DestinationIndex />
    </Provider>
  </React.StrictMode>
)
