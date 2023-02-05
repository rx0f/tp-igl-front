import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const connected = localStorage.getItem("user") ? true : false;
  const confirmed = parseInt(localStorage.getItem("confirmed"));

  if (!connected) return <Navigate to="/" replace/>;
  if (confirmed === 0) return <Navigate to="/resgiter" replace/>;

  return children;
}
