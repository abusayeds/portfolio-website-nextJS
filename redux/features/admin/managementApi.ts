import { baseApi } from "../../api/baseApi";

const tramsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getManagement: builder.query({
            query: (params) => {

                return {
                    url: `management/${params}`,
                    method: "GET",
                }
            },
            providesTags: ['management'],
        }),
        ManagementUpdate: builder.mutation({
            query: (body) => {
                return {
                    url: "management/create",
                    method: "POST",
                    body
                }
            },
            invalidatesTags: ["management"],
        }),
    }),
});

export const {
    useGetManagementQuery,
    useManagementUpdateMutation,
} = tramsApi;
