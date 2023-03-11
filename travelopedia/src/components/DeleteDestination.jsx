import React from "react"
import { useState } from "react"
import { useDeleteDestinationMutation } from "../api/destinationApi"

function DeleteDestination() {
  const [newId, setNewId] = useState("")
  const [deleteDestinationMutation, results] = useDeleteDestinationMutation()
  const handleFormSubmit = (e) => {
    e.preventDefault()
    deleteDestinationMutation(parseInt(newId))
    setNewId("")
  }
  return (
    <div className="p-4 border">
      <form onSubmit={handleFormSubmit}>
        <div className="row col-8 offset-2">
          <h4>Enter the Id of the Destination</h4>
          <div className="col-10 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter id..."
              value={newId}
              onChange={(e) => setNewId(e.target.value)}
            ></input>
          </div>
          <div className="col-2 p-1">
            <button className="btn btn-success form-control">Delete</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DeleteDestination
