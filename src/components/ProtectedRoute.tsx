import { Navigate, Outlet } from "react-router-dom";
import { useAppStore } from "../store/app.store";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { apiKey } = useAppStore(); 

  if (!apiKey) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;