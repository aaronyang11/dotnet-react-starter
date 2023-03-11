import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const destinationAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  endpoints: (builder) => ({
    getAllDestinations: builder.query({ query: () => "destinations" }),
  }),
})

export const { useGetAllDestinationsQuery } = destinationAPI
