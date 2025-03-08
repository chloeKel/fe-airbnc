import { useState } from "react";
import { ErrorContext, UserContext } from "./Contexts";
import ErrorPopUp from "../Components/ErrorPopUp";
import { useNavigate } from "react-router-dom";

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider
      value={{
        userId: 8,
        name: "Sophia Bennett",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const ErrorProvider = ({ children }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const handleCloseError = () => {
    setError(null);
    if (redirect) navigate(-1);
  };

  return (
    <ErrorContext.Provider value={{ setError, setRedirect }}>
      {children}
      {error ? <ErrorPopUp error={error} redirect={redirect} handleCloseError={handleCloseError} /> : null}
    </ErrorContext.Provider>
  );
};
