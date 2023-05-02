import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Location } from "react-router-dom";
export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  function handleLogin() {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  }
  return (
    <div>
      <label>
        Username:
        <input type="text" onChange={(e) => setUser(e.target.value)}></input>
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
