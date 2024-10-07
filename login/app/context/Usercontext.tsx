import React, { createContext, useContext, useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface UserContextType {
  user: User;
  updateUser: (newUserData: Partial<User>) => void; 
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({ firstName: "", lastName: "", email: "" });

  const updateUser = (newUserData: Partial<User>) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
