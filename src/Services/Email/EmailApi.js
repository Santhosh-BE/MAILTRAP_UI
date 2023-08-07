import { interceptorsApiCall } from "../../globals/interceptors";
const apiWithTag = interceptorsApiCall.enhanceEndpoints({ addTagTypes: ["IssuerNotes"] });

export const EmailApi = apiWithTag.injectEndpoints({
	endpoints: (builder) => ({
		getAllEmail: builder.query({
			query: () => `mail`,
		}),
		// getIssuerNotes: builder.query({
		// 	query: (params) => `api/Issuer/GetIssuerNotesList?${params}`,
			
		// }),
		putIssuerNotes: builder.mutation({
			query: (payload) => {
				return {
					url: "api/Issuer/UpdateIssuerNotes",
					method: "PUT",
					body: payload,
				};
			},
			invalidatesTags: ["IssuerNotes"],
			
		}),
		postIssuerNotes: builder.mutation({
			query: (payload) => {
				return {
					url: "api/Issuer/CreateIssuerNotes",
					method: "POST",
					body: payload,
				};
			},
			invalidatesTags: ["IssuerNotes"],
		}),
		postPaginatedIssuerNotes:builder.mutation({
			query:(payload)=>{
				return{
					url:"/api/Issuer/GetPaginatedIssuerNotes",
					method:"POST",
					body:payload,
				}
			},
			providesTags: ["IssuerNotes"],
		}),
		
	}),
	
});

export const { useGetAllEmailQuery } = EmailApi;
