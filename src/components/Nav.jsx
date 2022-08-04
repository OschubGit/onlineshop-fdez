import React, {useContext} from "react";
import { Link } from "react-router-dom";
/* material ui components */
import { Typography, Button } from "@mui/material";
import CardWidget from "./CardWidget";
import {categories} from "../utils/categories"
import { CartContext } from "../contexts/CartContext";


const Nav = () => {
  const test = useContext(CartContext)

  return (
    <nav className="nav">
      <div className="nav-menu">
        <Typography variant="h6" sx={{ minWidth: 100, mr: 3 }}>
          <Link to={"/"}>
            OnlineShop
          </Link>
        </Typography>
        {categories.map((m, index) => (
        <Typography className="categories-nav" key={index} sx={{ minWidth: 100 }}>
          <Link to={`/category/${m.category}`} color="inherit" underline="none">
            {m.category}
          </Link>
        </Typography>
        ))}
        <Link to={"/admin"}>
            <Button variant="contained" color="primary">Crear Producto</Button>
        </Link>
      </div>
      {test.cartList.length > 0 && (
      <div className="btn-login">
        <CardWidget/>
      </div>
      )}
    </nav>
  );
};

export default Nav;
