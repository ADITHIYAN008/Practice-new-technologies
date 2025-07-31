import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const FAKE_TOKEN_KEY = "fake_auth_token";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const token = await AsyncStorage.getItem(FAKE_TOKEN_KEY);
        setIsAuthenticated(!!token);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    loadAuthState();
  }, []);

  const signIn = async () => {
    await AsyncStorage.setItem(FAKE_TOKEN_KEY, "dummy_token");
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem(FAKE_TOKEN_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
