import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <ToastContainer
          position="bottom-right"
          autoClose={3500}
          newestOnTop
          theme="dark"
          toastStyle={{
            background: "rgba(20, 14, 38, 0.85)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(168, 85, 247, 0.25)",
            color: "#f3f0ff",
            borderRadius: "14px",
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
