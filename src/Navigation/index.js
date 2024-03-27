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
import NotFound from "../Pages/Common/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<ProtectedRoutes />}>
        <Route element={<Tours />} path="/" />
        <Route element={<Shows />} path="/shows/:tourId/:status" />
        <Route element={<Shows />} path="/shows/:tourId" />
        <Route element={<Products />} path="/products" />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
