import React from "react"
import { useGetRandomDestinationQuery } from "../api/randomDestinationApi"
import Destination from "./Destination"

function RandomDestination() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetRandomDestinationQuery()

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = (
      <div className="text-center border p-3">
        <h4 className="text-success">Random Destination Suggestion:</h4>
        {data.city}
        {", "}
        {data.country}
      </div>
    )
  } else if (error) {
    return <p>{error}</p>
  }
  return content
}

export default RandomDestination
