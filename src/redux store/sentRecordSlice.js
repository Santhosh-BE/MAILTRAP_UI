import { createSlice } from "@reduxjs/toolkit";

const sentRecordSlice = createSlice({
    name: 'sentRecord',
    initialState: {
        value: false
    },
    reducers: {
        showEmail: (state) => {
            state.value = true
        },
        hideEmail: (state) => {
            state.value = false
        }
    }
})

export const { showEmail, hideEmail } = sentRecordSlice.actions

export default sentRecordSlice.reducer