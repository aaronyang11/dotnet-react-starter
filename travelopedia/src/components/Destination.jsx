import React from "react"
import { useDeleteDestinationMutation } from "../api/destinationApi"

function Destination(props) {
  const [deleteDestinationMutation, results] = useDeleteDestinationMutation()
  return (
    <div
      className="row py-1"
      style={{
        borderBottom: "1px solid #333",
      }}
    >
      <div className="col-3 offset-3">
        {props.destination.city},{props.destination.country}
      </div>
      <div className="col-2 text-warning">
        {props.destination.daysNeeded} days
      </div>
      <div className="col-2">
        <button
          className="btn btn-danger form-control"
          onClick={(e) => {
            deleteDestinationMutation(props.destination.id)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Destination
