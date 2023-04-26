import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./Styles/ForgotPasswordStyle.css";

const RecoverPassword = () => {
  return (
    <div>
      <div className="recover-container">
        <h1>Just one More Step!</h1>
        <p>Input your your new password</p>
        <TextField
          id="outlined-basic"
          label="New Password"
          variant="outlined"
          type="password"
          style={{
            marginBottom: "20px",
            marginTop: "30px",
            width: "400px",
          }}
        />
        <br />
        <Button
          href="/"
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

export default RecoverPassword;
