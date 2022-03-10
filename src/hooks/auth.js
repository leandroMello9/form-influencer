import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { appGlobal } from "../util/axios";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function loadStorageData() {
      const token = await localStorage.getItem("token");
      if (token) {
        setData({ token });
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await appGlobal.post("/login", {
        userName: email,
        password,
      });

      const { accessToken, expirationTime } = response.data;

      await localStorage.setItem("token", accessToken);
      await localStorage.setItem("expirationTime", expirationTime);

      setData({ accessToken, expirationTime });
      navigate("/form")
      //navigate("/marked")
    } catch (err) {
      throw new Error(err);
     
    }
  }, []);

  const signOut = useCallback(async () => {
    await localStorage.removeItem("token");
    await localStorage.removeItem("expirationTime");
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
