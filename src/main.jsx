import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { ErrorProvider, UserProvider } from "./Contexts/Providers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ErrorProvider>
    </BrowserRouter>
  </StrictMode>
);
