import { interceptorsApiCall } from "../../globals/interceptors";
const apiWithTag = interceptorsApiCall.enhanceEndpoints({
    addTagTypes: ["mailTrap"],
});

export const EmailApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getAllEmail: builder.query({
            query: (params) => `api/mail?${params}`,
            providesTags: ["mailTrap"],
        }),
        loginPostApi: builder.mutation({
            query: (payload) => {
                return {
                    url: "v1/login",
                    method: "POST",
                    body: payload,
                };
            },
        }),
        getEmailById: builder.query({
            query: (params) => `/api/getmail?${params}`,
        }),
        composePostApi: builder.mutation({
            query: (payload) => {
                return {
                    url: "mail",
                    method: "POST",
                    body: payload,
                };
            },
            invalidatesTags: ["mailTrap"],
        }),
        updateStatusApi: builder.mutation({
            query: (payload) => {
                return {
                    url: "/api/updatestatus",
                    method: "PUT",
                    body: payload,
                };
            },
            invalidatesTags: ["mailTrap"],
        }),
        deleteMailApi: builder.mutation({
            query: (payload) => {
                return {
                    url: "/api/deletemail",
                    method: "DELETE",
                    body: payload,
                };
            },
            invalidatesTags: ["mailTrap"],
        }),
    }),
});

export const {
    useGetAllEmailQuery,
    useLoginPostApiMutation,
    useGetEmailByIdQuery,
    useComposePostApiMutation,
    useUpdateStatusApiMutation,
    useDeleteMailApiMutation,
} = EmailApi;
