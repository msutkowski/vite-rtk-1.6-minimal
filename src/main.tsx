import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  ApiProvider,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    fetchTodos: builder.query({
      query: () => "todos",
    }),
  }),
});

export const { useFetchTodosQuery } = api;

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
