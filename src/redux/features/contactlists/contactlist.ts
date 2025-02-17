import { baseApi } from "@/redux/api/baseApi";

const useContactListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContactList: builder.query({
      query: () => {
        return {
          url: "/contactLists",
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
          url: "/contactLists",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["createContactList", "updateContactList"],
    }),
    getContactListById: builder.query({
      query: (id) => {
        return {
          url: `/contactLists/${id}`,
          method: "GET",
        };
      },
      providesTags: ["deleteContactList"],
    }),
    updateContactList: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/contactLists/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["updateContactList"],
    }),
    deleteContactList: builder.mutation({
      query: (id: string) => ({
        url: `/contactLists/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteContactList"],
    }),
  }),
});

export const {
  useGetAllContactListQuery,
  useCreateContactListMutation,
  useGetContactListByIdQuery,
  useUpdateContactListMutation,
  useDeleteContactListMutation,
} = useContactListApi;
