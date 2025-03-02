import { useState } from "react";
import { ErrorContext, UserContext } from "./Contexts";
import { useNavigate } from "react-router-dom";
import { PopUpContent, PopUpOverlay, PopUpButton } from "../Styling/PopUpStyles";

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider
      value={{
        id: 1,
        name: "Alice Johnson",
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
  const [msg, setMsg] = useState(null);

  return (
    <ErrorContext.Provider value={{ setError, setMsg }}>
      {children}
      {error ? (
        <>
          <PopUpOverlay>
            <PopUpContent>
              <p>{msg}</p>
              <PopUpButton
                onClick={() => {
                  navigate(-1);
                  setError(null);
                }}
              >
                Explore
              </PopUpButton>
            </PopUpContent>
          </PopUpOverlay>
        </>
      ) : null}
    </ErrorContext.Provider>
  );
};
