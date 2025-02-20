import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  Outlet,
} from "react-router-dom";
import useAuthStore from "./store/useAuth";
import Home from "./components/Home";
import Login from "./components/Login";

function AppContent() {
  const { auth, logout, login } = useAuthStore();
  console.log(auth);
  
  return (
    <Routes>
      <Route
        path="/home"
        element={auth.isAuthenticated ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!auth.isAuthenticated ? <Login /> : <Home />}
      />
      <Route
        path="*"
        element={<Navigate to={auth.isAuthenticated ? "/home" : "/login"} />}
      />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
