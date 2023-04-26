import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./Styles/ForgotPasswordStyle.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const TwoFactorAuthPage = () => {
  return (
    <div>
      <div className="forgot-container">
        <h1>
          Your Token has been sent to
          <br /> your Email
        </h1>
        <p>Please input your token</p>
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
          href="/WelcomePage"
          variant="contained"
          style={{
            width: "fit-content",
            paddingLeft: "30px",
            paddingRight: "30px",
            backgroundColor: "#084143",
            width: "400px",
          }}
          endIcon={<KeyboardArrowRightIcon />}
          //   endIcon={<SendIcon />}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default TwoFactorAuthPage;
