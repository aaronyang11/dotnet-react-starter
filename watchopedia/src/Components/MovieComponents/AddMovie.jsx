import { useState } from "react"
const AddMovie = (props) => {
  const [name, setName] = useState("")
  const handleAddMovieFormSubmit = (e) => {
    e.preventDefault()
    props.handleAddMovie(name)
    setName("")
  }
  return (
    <form onSubmit={handleAddMovieFormSubmit}>
      <div className="row text-white">
        <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
        <div className="col-8 offset-1">
          <input
            type="text"
            placeholder="Movie Name..."
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value.trim())}
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success form-control">Add</button>
        </div>
        <hr className="mt-3"></hr>
      </div>
    </form>
  )
}

export default AddMovie
