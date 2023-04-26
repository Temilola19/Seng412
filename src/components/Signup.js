import React from "react";
import "./Styles/SignupStyle.css";
import { Link, useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
//import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import post from "../components/Images/undraw_content_creator_re_pt5b.svg";

const Signup = () => {
  const [role, setRole] = React.useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div>
      <div className="signup-container">
        <div className="box-container">
          <p className="head">GROUP 5</p>
          <h3>Blogs that shape lives</h3>
          <p className="intro">
            We're a community of writers sharing diverse perspectives and ideas.
            From personal stories to current events, we believe everyone has
            something valuable to contribute. Join us and be inspired!
          </p>
          <div className="grid-con">
            <p>Create</p>
            <p>Discover</p>
          </div>

          {/* <img src={post} /> */}
        </div>
        <div className="form-container">
          <form>
            <h2>Sign Up </h2>
            <p>
              Already have an account?{" "}
              <Link style={{ textDecoration: "none" }} to="/">
                <span className="login-link">Log in</span>
              </Link>
            </p>
            <TextField
              style={{
                width: "300px",

                marginBottom: "20px",
              }}
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />
            <br />
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
                marginBottom: "20px",
              }}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <br />
            <FormControl
              style={{
                width: "300px",
                marginBottom: "30px",
              }}
            >
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={"A"}>Administrator</MenuItem>
                <MenuItem value={"E"}>Editor</MenuItem>
                <MenuItem value={"R"}>Regular User</MenuItem>
              </Select>
            </FormControl>
            <br />
            <Button
              variant="contained"
              style={{
                width: "300px",
                backgroundColor: "#32021f",
              }}
              href="/WelcomePage"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
