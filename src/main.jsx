import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { ErrorProvider, UserProvider } from "./Contexts/Providers.jsx";
import { GlobalStyle } from "./Styling/GlobalStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <UserProvider>
          <GlobalStyle />
          <App />
        </UserProvider>
      </ErrorProvider>
    </BrowserRouter>
  </StrictMode>
);
