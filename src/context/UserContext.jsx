"use client";
import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const useUserContext = () => {
  const context = useContext(userContext);
  return context;
};

export default function UserProvider({ children }) {
  const [data, setData] = useState();
  const [user, setUser] = useState([]);
  const [userExists, setUserExists] = useState(false);

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
        setUserExists(true);
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
        userExists,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
