import { createContext, useContext, useState } from "react";

// Create the context
const AuthContext = createContext({
  username: "",
  email: "",
  setUsername: (username) => {},
  setEmail: (email) => {},
});

// Create the context provider component
const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <AuthContext.Provider value={{ username, email, setUsername, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create the custom hook to use the context value
const useAuth = () => useContext(AuthContext);

// Export the context provider and the custom hook
export { AuthContextProvider, useAuth };
