import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [guest, setGuest] = useState(1);

  return <UserContext.Provider value={{ guest, setGuest }}>{children}</UserContext.Provider>;
};
