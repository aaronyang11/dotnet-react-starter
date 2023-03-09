import logo from "../images/react.png";
import React from "react";

const Header = () => {
  return (
    <div className="py-2 pt-2" style={{ borderBottom: "1px solid #777" }}>
      <img
        src={logo}
        style={{ height: "35px", verticalAlign: "top" }}
        alt="logo"
      ></img>
      <span className="h2 pt-4 m-2 text-white-50">CycleOpedia</span>
    </div>
  );
};

export default Header;