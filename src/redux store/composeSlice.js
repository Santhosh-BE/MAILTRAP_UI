import { createSlice } from "@reduxjs/toolkit";

const composeSlice = createSlice({
    name: 'compose',
    initialState: {
        value: false,
        selectedMessage: null
    },
    reducers: {
        toggTrue: (state) => {
            state.value = true
        },
        toggFalse: (state) => {
            state.value = false
        },
        openMessage: (state, action) => {
            state.selectedMessage = action.payload
        },
        closeMessage: (state) => {
            state.selectedMessage = null
        }
    }
})

export const { toggTrue, toggFalse, openMessage, closeMessage } = composeSlice.actions

export default composeSlice.reducer