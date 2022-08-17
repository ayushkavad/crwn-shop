import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListner,
  createUserDocumentFormAuth,
} from '../utils/firebase/firebase.utils';

export const UserContaxt = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFormAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  });
  return <UserContaxt.Provider value={value}>{children}</UserContaxt.Provider>;
};

export default UserProvider;
