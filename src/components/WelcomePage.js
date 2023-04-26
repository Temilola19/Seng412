import React from "react";
import "./Styles/WelcomePageStyle.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Image from "./Images/undraw_work_chat_re_qes4.svg";

const WelcomePage = () => {
  return (
    <div>
      <div className="welcome-container">
        <div className="grid">
          <div className="con">
            <h2 className="welcome-header">Welcome To Our Website</h2>
            <p>Meet the members of our Group</p>
            <div className="members">
              <p className="member">
                Afolabi Temilola Omolara
                <br />
                <br />
                19/2022
              </p>
              <p className="member">
                Awani Georgina Eyiwetemi
                <br />
                <br />
                19/0517
              </p>
              <p className="member">
                Adebayo Mubarakatu Olajumoke
                <br />
                <br />
                19/0076
              </p>
              <p className="member">
                Adebiyi Temitayo Samiah
                <br />
                <br />
                19/0054
              </p>
              <p className="member">
                Aquaisua Victor Essien
                <br />
                <br />
                19/2804
              </p>
            </div>
          </div>
          <div>
            <img src={Image} />
          </div>
        </div>
        <div className="grid2">
          <Link
            to="/"
            style={{
              marginLeft: "100px",
              textDecoration: "none",
              color: "#f5f5f5",
              display: "flex",
              columnGap: "1px",
              alignItems: "center",
            }}
          >
            <KeyboardArrowLeftIcon /> <p style={{ fontSize: "18px" }}>Back</p>
          </Link>
          <Button
            href="/HomePage"
            variant="contained"
            style={{
              width: "300px",
              height: "60px",
              backgroundColor: "#084143",
              textAlign: "right",
              marginRight: "100px",
            }}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
