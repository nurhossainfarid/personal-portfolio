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
    }),
  }),
});

export const { useGetAllBlogQuery } = useBlogApi;
