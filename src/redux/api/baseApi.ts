import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://personal-portfolio-backend-ochre.vercel.app/portfolio/api",
  }),
  tagTypes: [
    "deleteBlog",
    "createBlog",
    "updateBlog",
    "createProject",
    "updatedProject",
    "deleteProject",
    "createContactList",
    "updateContactList",
    "deleteContactList",
  ],
  endpoints: () => ({}),
});
