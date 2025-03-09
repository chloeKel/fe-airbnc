import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { ErrorProvider, ModalProvider, UserProvider } from "./Contexts/Providers.jsx";
import { GlobalStyle } from "./Styling/GlobalStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <ErrorProvider>
          <UserProvider>
            <GlobalStyle />
            <App />
          </UserProvider>
        </ErrorProvider>
      </ModalProvider>
    </BrowserRouter>
  </StrictMode>
);
