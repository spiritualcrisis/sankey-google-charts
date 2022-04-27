import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { buildQueries } from '@testing-library/react';

interface SankeyData {
    expenseType:string,
    incomeType:string,
    transaction:string
}

export const sankeySlice = createApi({
    reducerPath:'sankeySlice',
    baseQuery:fetchBaseQuery({
        baseUrl:'/api'
    }),
    endpoints:(builder) => {
        return {
            fetchSankeyData:builder.query<SankeyData[], number|void>({
                query(limit =10){
                    return `/getExpenseData`
                }
            })
}
    }
})
export const { useFetchSankeyDataQuery } = sankeySlice