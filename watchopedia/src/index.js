import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Counter from "./Components/Counter"
import MoviePage from "./Components/MovieComponents/MoviePage"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div>
    <Header />
    <div className="p-2 m-2 row text-center">
      <Counter />
      <MoviePage />
    </div>
  </div>
)
