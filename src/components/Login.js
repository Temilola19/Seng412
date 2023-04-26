import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/LogInStyle.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="box-container2">
          <p className="header">GROUP 5</p>
          <h3>Welcome Back!</h3>
          <p className="idk">
            We're excited to have you back and can't wait to share more great
            content with you. Stay tuned for upcoming posts on a variety of
            topics, and thank you for being a part of our community!
          </p>
          <div className="grid-con2">
            <p>Create</p>
            <p>Discover</p>
          </div>

          {/* <img src={post} /> */}
        </div>
        <div className="form-container">
          <form>
            <h2>Log In </h2>
            {/* <p
              style={{
                width: "300px",
              }}
            >
              Oops! Don't have an account yet?{" "}
              <Link style={{ textDecoration: "none" }} to="/SignUp">
                <span className="signup-link">Sign Up</span>
              </Link>
            </p> */}

            <TextField
              style={{
                width: "300px",
                marginBottom: "20px",
              }}
              id="outlined-basic"
              type="email"
              label="Email"
              variant="outlined"
            />
            <br />
            <TextField
              style={{
                width: "300px",
                marginBottom: "1px",
              }}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <br />
            <Link style={{ textDecoration: "none" }} to="/ForgotPassword">
              <p
                style={{
                  marginBottom: "30px",
                  textAlign: "right",
                  marginRight: "25px",
                  color: "#32021f",
                }}
              >
                Forgot Password?
              </p>
            </Link>
            <Button
              href="/TwoFactorAuthPage"
              variant="contained"
              style={{
                width: "300px",
                backgroundColor: "#084143",
              }}
              endIcon={<KeyboardArrowRightIcon />}
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
