import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
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
