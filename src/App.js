import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import ForgotPassword from "./components/ForgotPassword";
import ForgotPasswordToken from "./components/ForgotPasswordToken";
import RecoverPassword from "./components/RecoverPassword";
import TwoFactorAuthPage from "./components/TwoFactorAuthPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/SignUp" element={<Signup />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/WelcomePage" element={<WelcomePage />} />
          <Route exact path="/HomePage" element={<HomePage />} />
          <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
          <Route
            exact
            path="/ForgotPasswordToken"
            element={<ForgotPasswordToken />}
          />
          <Route exact path="/RecoverPassword" element={<RecoverPassword />} />
          <Route
            exact
            path="/TwoFactorAuthPage"
            element={<TwoFactorAuthPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
