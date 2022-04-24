import { configureStore } from "@reduxjs/toolkit";
import sankeyReducer from "../features/sankeySlice"
export const store = configureStore({
    reducer:{
        // add all the slices here 
        sankey:sankeyReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDisoacth = typeof store.dispatch