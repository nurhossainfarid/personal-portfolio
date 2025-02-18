import { baseApi } from "@/redux/api/baseApi";

const useContactListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContactList: builder.query({
      query: () => {
        return {
          url: "/contacts",
          method: "GET",
        };
      },
      providesTags: [
        "deleteContactList",
        "createContactList",
        "updateContactList",
      ],
    }),
    createContactList: builder.mutation({
      query: (body) => {
        return {
          url: "/contacts/create-contact",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["createContactList", "updateContactList"],
    }),
  }),
});

export const {
  useGetAllContactListQuery,
  useCreateContactListMutation,
} = useContactListApi;
