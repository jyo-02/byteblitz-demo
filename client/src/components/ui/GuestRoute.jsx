import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/store/useUserStore"; // your Zustand store

const GuestRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  useEffect(() => {
    if (user) {
      navigate("/problemset"); // redirect logged-in users
    }
  }, [user, navigate]);

  return user ? null : children;
};

export default GuestRoute;
