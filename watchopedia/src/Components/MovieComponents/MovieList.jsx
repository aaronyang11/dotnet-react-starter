const MovieList = (props) => {
  return (
    <div className="text-white">
      {props.movieState.movies.map((movie, index) => {
        return <div key={index}>{movie}</div>
      })}
    </div>
  )
}
export default MovieList
