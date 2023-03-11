import { React, useState } from "react"
import { useGetAllDestinationsQuery } from "../api/destinationApi"
import { useDeleteDestinationMutation } from "../api/destinationApi"

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationsQuery()
  const [destinationDeleted, setDestinationDeleted] = useState(0)
  const [deleteDestinationMutation, results] = useDeleteDestinationMutation()
  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = data.map((destination) => {
      return (
        <div
          className="row py-1"
          style={{
            borderBottom: "1px solid #333",
          }}
        >
          <div className="col-3 offset-3">
            {destination.city},{destination.country}
          </div>
          <div className="col-2 text-warning">
            {destination.daysNeeded} days
          </div>
          <div className="col-2">
            <button
              className="btn btn-danger form-control"
              onClick={(e) => {
                deleteDestinationMutation(destination.id)
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )
    })
  } else if (error) {
    return <p>{error}</p>
  }
  return content
}

export default DestinationList
