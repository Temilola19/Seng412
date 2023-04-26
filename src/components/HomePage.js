import React from "react";
import NavBar from "./NavBar";
import "./Styles/HomePageStyle.css";
import post from "./Images/undraw_publish_post_re_wmql (1).svg";
import FeaturedContent from "./FeaturedContent";
import Button from "@mui/material/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Styles/FeaturedStyle.css";

const HomePage = () => {
  return (
    <div>
      <div className="home-container">
        <div className="section1">
          <NavBar />
          <div className="hero">
            <div className="feature1">
              <h7>Featured</h7>
              <h3>How To Use Our Blog</h3>
              <p>Lorem Posum</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  columnGap: "20px",
                }}
              >
                <Button
                  variant="outlined"
                  style={{ color: "#f5f5f5", border: "1px solid #f5f5f5" }}
                  endIcon={<CallMadeIcon />}
                >
                  Read Article
                </Button>
                <p className="username">by Full Name</p>
              </div>
            </div>
            <div className="nextgrid">
              <div className="feature2">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h7>Featured</h7>
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

                <h3>How To Use Our Blog</h3>
                <p>Lorem Posum</p>
              </div>
              <div className="feature3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h7>Featured</h7>
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
                <h3>How To Use Our Blog</h3>
                <p>Lorem Posum</p>
              </div>
            </div>
          </div>
        </div>

        <FeaturedContent />
      </div>
    </div>
  );
};

export default HomePage;
