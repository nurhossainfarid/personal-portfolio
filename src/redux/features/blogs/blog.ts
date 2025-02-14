import { baseApi } from "@/redux/api/baseApi";

const useBlogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlog: builder.query({
      query: () => {
        return {
          url: "/blog",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllBlogQuery } = useBlogApi;
