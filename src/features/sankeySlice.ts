import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SankeyState {
    value:string[]
}

const initialState:SankeyState = {
    value:[]
}
export const sankeySlice = createSlice({
    name:"sankey",
    initialState,
    reducers:{
        //methods to handle sankey data
        addSankeyData:(state, action:PayloadAction<string>) => {
            state.value.push(action.payload)
        }
    }
})
export const {addSankeyData} = sankeySlice.actions
export default sankeySlice.reducer