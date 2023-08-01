"use client";
import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();

export const useUserContext = () => {
  const context = useContext(userContext);
  return context;
};

export default function UserProvider({ children }) {
  const [data, setData] = useState();
  const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || [];
  const [user, setUser] = useState(userFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [data, user]);

  const getUser = async () => {
    try {
      const url = "https://api.spotify.com/v1/me";
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${data}`,
        },
      });
      if (response.ok) {
        const info = await response.json();
        setUser(info);
      }
    } catch {
      console.log("error");
    }
  };

  return (
    <userContext.Provider
      value={{
        data,
        setData,
        user,
        getUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
