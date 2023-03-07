import { useState } from "react"
import AddMovie from "./AddMovie"
import MovieList from "./MovieList"

const MoviePage = () => {
  const [movieState, setMovieState] = useState(() => {
    return { movies: ["Die Hard", "Harry Potter"] }
  })

  function handleAddMovie(movie) {
    setMovieState((prevState) => {
      return { movies: prevState.movies.concat([movie]) }
    })
  }
  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList movieState={movieState} />
    </div>
  )
}

export default MoviePage
