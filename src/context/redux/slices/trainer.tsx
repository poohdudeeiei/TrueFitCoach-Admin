import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Trainer, TrainerType } from "../../../model/trainer";
import { baseURL } from "@/config/endpoint/public";

// Define a service using a base URL and expected endpoints
export const trainerApi = createApi({
  reducerPath: "trainerApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, credentials: "include" }),
  tagTypes: ["Not-verify-trainers"],
  endpoints: (builder) => ({
    getAllTrainersPagination: builder.query<
      TrainerType,
      { page: number; limit: number; search: string }
    >({
      query: ({ page, limit, search }) =>
        `manage/get-trainers?page=${page}&limit=${limit}&search=${search}`,
      providesTags: (result) =>
        result
          ? [
              ...result.trainers?.map(
                ({ _id }) => ({ type: "Not-verify-trainers", id: _id } as const)
              ),
              { type: "Not-verify-trainers", id: "LIST" },
            ]
          : [{ type: "Not-verify-trainers", id: "LIST" }],
    }),
    updateVerifyTrainer: builder.mutation<
      void,
      { _id: string; verify: boolean }
    >({
      query(data) {
        return {
          url: `manage/verify-trainers`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: (result, error, arg) => [
        { type: "Not-verify-trainers", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetAllTrainersPaginationQuery,
  useUpdateVerifyTrainerMutation,
} = trainerApi;
