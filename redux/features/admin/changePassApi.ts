import { baseApi } from "../../api/baseApi";

const changePassApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // ** change pass** //
        changePass: builder.mutation({
            query: (body) => {
                return {
                    url: "user/change-password",
                    method: "POST",
                    body
                }
            },
        }),
        // **forget** //
        forgetPassword: builder.mutation({
            query: (body) => {
                return {
                    url: "user/forget-password",
                    method: "POST",
                    body
                }
            },
        }),
        // ** varify ** //
        verifyotp: builder.mutation({
            query: (body) => {
                return {
                    url: `user/verify-forget-otp`,
                    method: "POST",
                    body
                };
            },
        }),
        // ** resend ** //
        resend: builder.mutation({
            query: (body) => {
                return {
                    url: `user/resend`,
                    method: "POST",
                    body
                };
            },
        }),
        // ** Privacy ** //
        resetPassword: builder.mutation({
            query: (body) => {
                return {
                    url: `user/reset-password`,
                    method: "POST",
                    body
                };
            },
        }),
    }),
});

export const {
    useChangePassMutation,
    useForgetPasswordMutation,
    useVerifyotpMutation,
    useResetPasswordMutation
} = changePassApi;
