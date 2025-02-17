import { baseApi } from "@/redux/api/baseApi";

const useBlogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlog: builder.query({
      query: () => {
        return {
          url: "/blogs",
          method: "GET",
        };
      },
      providesTags: ["deleteBlog"],
    }),
    createBlog: builder.mutation({
      query: (body) => {
        return {
          url: "/blogs",
          method: "POST",
          body,
        };
      },
    }),
    getBlogById: builder.query({
      query: (id) => {
        return {
          url: `/blogs/${id}`,
          method: "GET",
        };
      },
      providesTags: ["deleteBlog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/blogs/${id}`,
          method: "PUT",
          body,
        };
      },
    }),
    deleteBlog: builder.mutation({
      query: (id: string) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteBlog"],
    }),
  }),
});

export const {
  useGetAllBlogQuery,
  useCreateBlogMutation,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = useBlogApi;
