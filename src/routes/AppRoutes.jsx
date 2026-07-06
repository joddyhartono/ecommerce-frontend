import { Route, Routes } from "react-router";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Layout from "@/layouts/Layout";
import ProductPage from "@/pages/ProductPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ProfilePage from "@/pages/ProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<ProductPage />} path="/products" />
          <Route element={<ProductDetailPage />} path="/products/:id" />
          <Route element={<ProfilePage />} path="/profile" />
        </Route>
      </Route>

      <Route element={<PublicRoute />}>
        <Route element={<LoginPage />} path="/login" />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
