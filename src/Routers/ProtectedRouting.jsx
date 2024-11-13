import { Navigate } from "react-router-dom";

export default function ProtectedRouting({ children }) {
  const UserKeyCode = localStorage.getItem("UserKey");

  if (UserKeyCode) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"} />;
  }
}
