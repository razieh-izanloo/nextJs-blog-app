"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getUserApi, signinApi, signupApi } from "@/services/authService";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    case "loading":
      return { ...state, isLoading: action.payload ?? true };
    case "signin":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "signup":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "user/loaded":
      return { ...state, user: action.payload, isAuthenticated: true };
  }
}

const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  const router = useRouter();

  async function signin(values) {
    dispatch({ type: "loading" });
    try {
      const { message, user } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      // router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      toast.error(errorMsg);
      dispatch({ type: "rejected", payload: errorMsg });
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }

  async function signup(values) {
    dispatch({ type: "loading" });
    try {
      const { message, user } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      toast.error(errorMsg);
      dispatch({ type: "rejected", payload: errorMsg });
      dispatch({ type: "loading", payload: false });
    }
  }

  async function getUser() {
    dispatch({ type: "loading" });
    try {
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      dispatch({ type: "rejected", payload: error?.response?.data?.message });
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") throw new Error("not found auth context");
  return context;
}
