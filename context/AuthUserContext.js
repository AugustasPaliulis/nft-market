import { createContext, useContext, Context } from "react";

import useFirebaseAuth from "../firebase/lib/auth/useFirebaseAuth";

const authUserContext = createContext({
  authUser: null,
  loading: true,
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();

  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
