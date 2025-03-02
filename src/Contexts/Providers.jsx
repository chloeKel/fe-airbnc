import { UserContext } from "./Contexts";

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
