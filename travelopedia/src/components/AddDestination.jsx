import React from "react"

function AddDestination() {
  return (
    <div className="p-4 border">
      <form>
        <div className="row col-8 offset-2">
          <h4>Enter a New Destination</h4>
          <div class="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city..."
            ></input>
          </div>
          <div class="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter country..."
            ></input>
          </div>
          <div class="col-2 p-1">
            <button className="btn btn-success form-control">Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddDestination
