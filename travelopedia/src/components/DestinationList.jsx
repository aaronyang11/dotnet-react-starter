import { React, useState } from "react"
import { useGetAllDestinationsQuery } from "../api/destinationApi"
import Destination from "./Destination"
function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationsQuery()

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = data.map((destination) => {
      return <Destination destination={destination} />
    })
  } else if (error) {
    return <p>{error}</p>
  }
  return content
}

export default DestinationList
