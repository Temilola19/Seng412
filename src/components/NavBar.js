import React from "react";
import "./Styles/NavBarStyle.css";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const NavBar = () => {
  // const [state, setState] = React.useState({
  //   tfa: true,
  // });

  // const handleChange = (event) => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.checked,
  //   });
  // };
  return (
    <div>
      <div className="nav-container">
        <ul className="nav-grid">
          <li className="logo">Group 5</li>
          <li>
            <Button
              variant="contained"
              style={{
                width: "fit-content",
                paddingLeft: "30px",
                paddingRight: "30px",
                backgroundColor: "#084143",
              }}
              href="/"
            >
              Log Out
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
