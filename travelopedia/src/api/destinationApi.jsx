import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const destinationAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  endpoints: (builder) => ({
    getAllDestinations: builder.query({ query: () => "destinations" }),
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
    }),
    deleteDestination: builder.mutation({
      query: (id) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
})

export const {
  useGetAllDestinationsQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationAPI
