import { configureStore } from "@reduxjs/toolkit";
import { EmailApi } from "./Services/Email/EmailApi";


export const store = configureStore({
  reducer: {
    [EmailApi.reducerPath]: EmailApi.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(EmailApi.middleware),
});
