import { useState } from "react";

export default function useLocalStorageUser() {
  const [user, setUserState] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : "";
    } catch (err) {
      console.error("Failed to parse user from localStorage:", err);
      return "";
    }
  });

  const setUser = (newUser) => {
    try {
      const updatedUser =
        typeof newUser === "function" ? newUser(user) : newUser;

      if (updatedUser) {
        localStorage.setItem("user", JSON.stringify(updatedUser));
      } else {
        localStorage.removeItem("user");
      }

      setUserState(updatedUser);
    } catch (err) {
      console.error("Failed to update user in localStorage:", err);
    }
  };

  return [user, setUser];
}
