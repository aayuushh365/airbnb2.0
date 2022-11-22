import React from "react";
import logo from "../images/logo.png";
import { BiWorld } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left */}
      <div className="navbar-left">
        <img src={logo} className="logo" />
      </div>
      {/*  Middle */}
      <div className="navbar-middle">
        <input type="search" placeholder="" className="search-box" />
        <div className="navbar-middle-left">
          <button
            style={{
              fontWeight: "bold",
              borderRight: "1px solid #d9d9d9",
              paddingRight: "35px",
            }}
          >
            Place
          </button>
          <button style={{ fontWeight: "bold", paddingRight: "10px" }}>
            Time
          </button>
          <button style={{ fontWeight: 200, borderLeft: "1px solid #d9d9d9" }}>
            Group Size
          </button>
          <div className="search-icon">
            <BiSearchAlt />
          </div>
        </div>
      </div>

      {/*  Right */}
      <div className="navbar-right" style={{ marginRight: "50px" }}>
        <p style={{ paddingBottom: "2px", fontWeight: "600" }}>
          Airbnb Your Home
        </p>
        <div className="language">
          <BiWorld
            size={"22px"}
            style={{
              cursor: "pointer",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "1px",
            }}
          />
          <p>EN</p>
        </div>
        <div className="navbar-right-signup">
          <AiOutlineMenu
            size={"15px"}
            style={{ marginRight: ".8rem", paddingTop: "5px" }}
          />
          <FaUserCircle size={"25px"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
