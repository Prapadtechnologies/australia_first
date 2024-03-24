import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "../src/Navigation";
import { ApiUrl } from "./Constants/Api";
import { AuthContext } from "./Context/AuthContext";
import { apiCall } from "./Utilites/Api";

function App() {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  const doLogin = async (payload) => {
    // const accessToken = 'dwedewdwedewdwedewdn';
    // localStorage.setItem("accessToken", accessToken);
    // setAccessToken(accessToken);
    // toast.success('Login success');

    const resp = await apiCall(ApiUrl.login, payload);
    if (resp.status) {
      const accessToken = resp.data.token;
      localStorage.setItem("accessToken", accessToken);
      setAccessToken(accessToken);
      toast.success(resp.message);
    } else {
      toast.error(resp.message);
    }
  };

  const doLogout = async () => {
    localStorage.removeItem("accessToken", accessToken);
    setAccessToken(null);
    // const resp = await apiCall(ApiUrl.logout,{});
    // console.log(resp);
  };

  return (
    <AuthContext.Provider value={{ accessToken, doLogin, doLogout }}>
      <RouterProvider router={Router} />
      <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
