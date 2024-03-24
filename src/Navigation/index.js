import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home/Dashboard";
import Shows from "../Pages/Home/Shows";
import Products from "../Pages/Home/Products";
import Login from "../Pages/Authentication/Login";
import ProtectedRoutes from "../Navigation/ProtectedRoutes";
import Tours from "../Pages/Home/Tours";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<ProtectedRoutes />}>
        <Route element={<Tours />} path="/" />
        <Route element={<Shows />} path="/shows/:tourId" />
        <Route element={<Products />} path="/products" />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  )
);

export default router;
