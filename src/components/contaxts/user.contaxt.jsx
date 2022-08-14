import { createContext, useState } from 'react';

export const UserContaxt = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContaxt.Provider value={value}>{children}</UserContaxt.Provider>;
};

export default UserProvider;
