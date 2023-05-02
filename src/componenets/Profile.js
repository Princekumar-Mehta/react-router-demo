import React from "react";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    console.log("hello");
    auth.logout();
    navigate("/");
  }
  return (
    <>
      <div>Welcome {auth.user}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
