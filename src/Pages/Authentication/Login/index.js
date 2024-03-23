import React, { useState, useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import { ClipLoader } from "react-spinners";

import loginBg from "../../../Assets/login_bg.svg";
import TextInput from "../../../Components/TextInput";
import CustomButton from "../../../Components/CustomButton";
import { LoginSchema } from "../../../Utilites/Validation";
import { AuthContext } from "../../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const loginContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(false);
  };

  const handleHidePassword = () => {
    setShowPassword(true);
  };

  const doUserLogin = (payload) => {
    loginContext.doLogin(payload);
  };

  useEffect(() => {
    if (loginContext.accessToken) {
      navigate("/");
    }
  }, [loginContext.accessToken]);

  return (
    <>
      <div className="flex flex-row bg-primary">
        <div className="w-3/5 flex items-start">
          <img
            src={loginBg}
            alt="Login background image"
            className="w-full object-cover h-screen"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-2/5">
          <p className="font-pop text-4xl font-bold text-white text-center my-1">
            Welcome Back!
          </p>
          <p className="font-pop text-sm text-white text-center my-1">
            Please enter your details
          </p>
          <Formik
            initialValues={{ identity: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              doUserLogin(values);
            }}
          >
            {({
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="bg-white rounded-xl my-8 p-16 flex flex-col gap-8 justify-center items-center">
                  <div className="relative">
                    <TextInput
                      type="text"
                      name="identity"
                      placeholder="Email or identity"
                      rightIcon={null}
                    />
                  </div>
                  <div className="relative">
                    <TextInput
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      rightIcon={
                        showPassword ? (
                          <FaEyeSlash
                            className="text-grey1"
                            onClick={handleShowPassword}
                          />
                        ) : (
                          <FaEye
                            className="text-grey1"
                            onClick={handleHidePassword}
                          />
                        )
                      }
                    />
                  </div>
                  <CustomButton
                    className="bg-primary w-5/12"
                    title="Sign in"
                    disabled={isSubmitting}
                    type={"submit"}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
