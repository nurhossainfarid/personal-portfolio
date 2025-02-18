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
      providesTags: ["deleteBlog", "createBlog", "updateBlog"],
    }),
    createBlog: builder.mutation({
      query: (body) => {
        return {
          url: "/blogs/create-blog",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["createBlog"],
    }),
    getBlogById: builder.query({
      query: (id) => {
        return {
          url: `/blogs/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateBlog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/blogs/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["updateBlog"],
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
