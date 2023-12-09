import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

export const Logout = () => {
  const navigate = useNavigate();
  const { setAuth } = UseAuth();

  useEffect(() => {
    localStorage.clear();
    setAuth({});
    navigate("/login");
  });
  return <h1>Cerrando sesión</h1>;
};
