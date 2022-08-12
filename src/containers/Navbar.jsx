import React from "react";
import Nav from "../components/Nav";
import TemporaryDrawer from "../components/drawer/Drawer";

const Navbar = () => {
  return (
      <div className="navbar navbar_toolbar">
        <div className="navbar_drawer">
          <TemporaryDrawer/>
        </div>
          <Nav/>
      </div>
  );
};

export default Navbar;
