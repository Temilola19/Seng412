import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Styles/FeaturedStyle.css";
import CallMadeIcon from "@mui/icons-material/CallMade";

const FeaturedContent = () => {
  return (
    <div>
      <div
        className="fcon"
        style={{
          padding: "50px",
        }}
      >
        <div
          className="featured-container"
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "auto auto",
            justifyContent: "center",
            columnGap: "15px",
          }}
        >
          <div className="content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Title</p>
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: "50px",
                }}
              >
                <IconButton>
                  <CallMadeIcon />
                </IconButton>
              </div>
            </div>
            <p className="uname">by Full Name</p>
            <p className="body">lorem posum</p>
          </div>
          <div className="content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Title</p>
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: "50px",
                }}
              >
                <IconButton>
                  <CallMadeIcon />
                </IconButton>
              </div>
            </div>
            <p className="uname">by Full Name</p>
            <p className="body">lorem posum</p>
          </div>
          <div className="content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Title</p>
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: "50px",
                }}
              >
                <IconButton>
                  <CallMadeIcon />
                </IconButton>
              </div>
            </div>
            <p className="uname">by Full Name</p>
            <p className="body">lorem posum</p>
          </div>
          <div className="content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Title</p>
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: "50px",
                }}
              >
                <IconButton>
                  <CallMadeIcon />
                </IconButton>
              </div>
            </div>
            <p className="uname">by Full Name</p>
            <p className="body">lorem posum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
