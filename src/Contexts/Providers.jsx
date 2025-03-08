import { useState, useEffect, useMemo } from "react";
import { ErrorContext, UserContext } from "./Contexts";
import ErrorPopUp from "../Components/ErrorPopUp";
import { useNavigate } from "react-router-dom";
import useFetchUser from "../CustomHooks/useFetchUser";

export const UserProvider = ({ children }) => {
  const { fetchUser } = useFetchUser();
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(8);

  useEffect(() => {
    (async () => {
      const user = await fetchUser(userId);
      setUser(user);
    })();
  }, [fetchUser, userId]);

  const contextValue = useMemo(
    () => ({
      user,
      userId,
      setUserId,
    }),
    [user, userId]
  );

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export const ErrorProvider = ({ children }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const handleCloseError = () => {
    setError(null);
    if (redirect) navigate(-1);
  };

  const contextValue = useMemo(
    () => ({
      setError,
      setRedirect,
    }),
    []
  );

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
      {error ? <ErrorPopUp error={error} redirect={redirect} handleCloseError={handleCloseError} /> : null}
    </ErrorContext.Provider>
  );
};
