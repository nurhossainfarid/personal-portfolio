import { baseApi } from "@/redux/api/baseApi";

const useBlogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProject: builder.query({
      query: () => {
        return {
          url: "/projects",
          method: "GET",
        };
      },
    }),
    createProject: builder.mutation({
      query: (body) => {
        return {
          url: "/projects",
          method: "POST",
          body,
        };
      },
    }),
    getProjectById: builder.query({
      query: (id) => {
        return {
          url: `/projects/${id}`,
          method: "GET",
        };
      },
    }),
    updateProject: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/projects/${id}`,
          method: "PUT",
          body,
        };
      },
    }),
    deleteProject: builder.mutation({
      query: (id) => {
        return {
          url: `/projects/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllProjectQuery,
  useCreateProjectMutation,
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = useBlogApi;
