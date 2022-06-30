import React from "react";
/* material ui components */
import { Link, Typography } from "@mui/material";
import CardWidget from "./CardWidget";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-menu">
        <Typography variant="h6" sx={{ minWidth: 100, mr: 3 }}>
          OnlineShop
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Link href="#" color="inherit" underline="none">
            Home
          </Link>
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Link href="#" color="inherit" underline="none">
            Shop
          </Link>
        </Typography>
      </div>
      <div className="btn-login">
        <CardWidget/>
      </div>
    </nav>
  );
};

export default Nav;
