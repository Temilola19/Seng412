import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./Styles/ForgotPasswordStyle.css";

const ForgotPassword = () => {
  return (
    <div>
      <div className="forgot-container">
        <h1>Forgot Password?</h1>
        <p>Please input your Email to get a code</p>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          style={{
            marginBottom: "20px",
            marginTop: "30px",
            width: "400px",
          }}
        />
        <br />
        <Button
          href="/ForgotPasswordToken"
          variant="contained"
          style={{
            width: "fit-content",
            paddingLeft: "30px",
            paddingRight: "30px",
            backgroundColor: "#084143",
            width: "400px",
          }}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
