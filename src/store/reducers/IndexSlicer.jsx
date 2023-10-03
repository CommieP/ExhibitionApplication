import { createSlice } from "@reduxjs/toolkit";

const IndexSlice = createSlice({
    name: "Index",
    initialState: {
        value: 0,
    },
    reducers: {
        setIndex: (state, action) => {
            state.value = action.payload
        }
    }
})

export const IndexSetAction  = IndexSlice.actions

export default IndexSlice.reducer