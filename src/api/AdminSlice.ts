import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `account`,
      providesTags: (result, error, arg) => {
        
        if (result?.ids) {
            return [
                { type: 'User', id: 'LIST' },
                ...result.ids.map((id : string)=> ({ type: 'User', id }))
            ]
        } else return [{ type: 'User', id: 'LIST' }]
    }
}),

    addAccount: builder.mutation({
      query: (initialUserData) => ({
        url : 'account',
        method : "POST",
        body : {...initialUserData}
      }),
      invalidatesTags   : [{
        type : 'User', id : "LIST"
      }]
    }),
  }),
})


export const { useGetAccountsQuery, useAddAccountMutation } = adminApi;