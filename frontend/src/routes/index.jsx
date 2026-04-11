import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./protectedRoutes";
import PublicRoute from "./publicRoutes";
import ScrollToTop from "../utils/ScrollToTop.jsx";

// Pages
import Login from "../pages/auth/Login/Login.jsx";
import Register from "../pages/auth/Register/Register.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword/Forgot.jsx";
// ================== PUBLIC ROUTES ==================
const publicRoutes = [
  {
    path: "/dang-nhap",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/dang-ky",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/quen-mat-khau",
    element: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
  },
  
];

// ================== PRIVATE ROUTES ==================
const privateRoutes = [
  
];

// ================== APP ROUTES ==================
export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {privateRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* <Route path="/403" element={<UnauthorizedPage />} />

        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}
