// index.js
import React from "react";
import ReactDOM from "react-dom/client"; // 변경된 import
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
);
