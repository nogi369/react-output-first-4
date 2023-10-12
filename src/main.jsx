import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoPage } from "./components/Pages/todo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoPage />
  </React.StrictMode>
);
