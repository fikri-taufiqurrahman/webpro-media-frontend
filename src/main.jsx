import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import AppRoute from "./router.jsx";
import { ToastContainer } from "react-toastify";
import { store } from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoute />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnHover={false}
      />
    </Provider>
  </StrictMode>
);
