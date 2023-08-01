import { configureStore } from "@reduxjs/toolkit";
import composeReducer from './composeSlice'
import userReducer from './userSlice'
import sentRecordSliceReducer from './sentRecordSlice'

export default configureStore({
    reducer: {
        compose: composeReducer,
        user: userReducer,
        sentRecord: sentRecordSliceReducer
    }
})