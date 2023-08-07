import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const interceptorsApiCall = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DEV_APIBASEURL,
        credentials: 'same-origin',
        prepareHeaders: (headers, { getState, endpoint }) => {
            headers.set('Access-Control-Allow-Headers', '*');
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('user-tz', new Date().getTimezoneOffset().toString());
            headers.set('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE');
            headers.set('Authorization', `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`);
            headers.set('ngrok-skip-browser-warning', true);
            return headers;
        },
    }),
    tagTypes: '',
    endpoints: () => ({}),
});