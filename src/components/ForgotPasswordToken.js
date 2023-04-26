import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./Styles/ForgotPasswordStyle.css";

const ForgotPasswordToken = () => {
  return (
    <div>
      <div className="token-container">
        <h1>
          Your code has been sent to
          <br /> your mail
        </h1>
        <p>Input your token</p>
        <TextField
          id="outlined-basic"
          label="Token"
          variant="outlined"
          type="text"
          style={{
            marginBottom: "20px",
            marginTop: "30px",
            width: "400px",
          }}
        />
        <br />
        <Button
          href="/RecoverPassword"
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

export default ForgotPasswordToken;
