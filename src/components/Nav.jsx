import React, { useContext } from "react";
import { Link } from "react-router-dom";
/* material ui components */
import { Typography } from "@mui/material";
import CardWidget from "./CardWidget";
import { CartContext } from "../contexts/CartContext";
import { nav } from "../utils/nav";

const Nav = () => {
  const test = useContext(CartContext);

  return (
    <nav className="navbar_nav">
      <Link to={"/"}>
        <Typography className="logo" variant="h6" sx={{ minWidth: 100, mr: 3 }}>
          ARAZ
        </Typography>
      </Link>
      <div className="navbar_nav-menu">
        {nav.map((m, index) => (
          <Typography
            className="categories-nav"
            key={index}
            sx={{ minWidth: 100 }}
          >
            <Link
              to={"/"}
              color="inherit"
              underline="none"
            >
              {m.item}
            </Link>
          </Typography>
        ))}
      </div>
      {test.cartList.length > 0 && (
        <div className="btn-login">
          <CardWidget />
        </div>
      )}
    </nav>
  );
};

export default Nav;
