import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const randomDestinationApi = createApi({
  reducerPath: "apiRandomDestination",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
  endpoints: (builder) => ({
    getRandomDestination: builder.query({
      query: () => "addresses",
    }),
  }),
})

export const { useGetRandomDestinationQuery } = randomDestinationApi
