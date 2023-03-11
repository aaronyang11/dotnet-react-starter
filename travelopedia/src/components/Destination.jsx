import { React, useState } from "react"
import {
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} from "../api/destinationApi"

function Destination(props) {
  const [updateDestination] = useUpdateDestinationMutation()
  const [deleteDestinationMutation] = useDeleteDestinationMutation()
  const [isUpdating, setIsUpdating] = useState(false)
  const [newCity, setNewCity] = useState(props.destination.city)
  const [newCountry, setNewCountry] = useState(props.destination.country)

  return (
    <div
      className="row py-1"
      style={{
        borderBottom: "1px solid #333",
      }}
      key={props.destination.id}
    >
      <div className="col-4 row offset-2">
        <div className="row">
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                defaultValue={props.destination.city}
                className="form-control"
                placeholder="city..."
                onChange={(e) => {
                  setNewCity(e.target.value)
                }}
              ></input>
            ) : (
              <span>{props.destination.city}</span>
            )}
          </div>
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                defaultValue={props.destination.country}
                className="form-control"
                placeholder="country..."
                onChange={(e) => {
                  setNewCountry(e.target.value)
                }}
              ></input>
            ) : (
              <span>{props.destination.country}</span>
            )}
          </div>
        </div>
      </div>

      <div className="col-1 text-warning">
        {props.destination.daysNeeded} days
      </div>

      <div className="col-3">
        <button
          className="btn btn-warning"
          onClick={(e) => {
            setIsUpdating(!isUpdating)
          }}
        >
          {isUpdating ? "Cancel" : "Edit"}
        </button>
        {isUpdating ? (
          <button
            className="btn btn-primary"
            onClick={(e) => {
              updateDestination({
                id: props.destination.id,
                city: newCity,
                country: newCountry,
                daysNeeded: props.destination.daysNeeded,
              })
              setIsUpdating(!isUpdating)
            }}
          >
            Update
          </button>
        ) : (
          ""
        )}
        <button
          className="btn btn-danger m-1"
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
