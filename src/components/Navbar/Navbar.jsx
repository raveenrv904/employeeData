import React, { useContext } from "react";
import "./Navbar.css";

import { AddIcon } from "../../assets";
import { MyContext } from "../../MyContext";

const Navbar = () => {
  const { setDisplayCreateUser } = useContext(MyContext);
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container-button">
          <img
            src={AddIcon}
            alt="Add Icon"
            className="navbar__container-button-icon"
          />
          <h2
            className="navbar__container-button-title"
            onClick={() => {
              setDisplayCreateUser(true);
            }}
          >
            Create User
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
