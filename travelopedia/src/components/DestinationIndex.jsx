import React from "react"
import AddDestination from "./AddDestination"
import DeleteDestination from "./DeleteDestination"
import DestinationList from "./DestinationList"

function DestinationIndex() {
  return (
    <div className="text-white">
      <h1 className="text-success text-center">Travel List</h1>
      <AddDestination />
      <DestinationList />
      <DeleteDestination />
    </div>
  )
}

export default DestinationIndex
