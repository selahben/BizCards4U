import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

export function SignOut({ redirect = "/" }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    navigate(redirect);
  }, [navigate, logout]);

  return null;
}
