import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";
import { CartContext } from "../contexts/CartContext";
import { nav } from "../utils/nav";

const Nav = () => {
  const test = useContext(CartContext);

  return (
    <nav className="navbar_nav">
      <Link to={"/"}>
        <span className="logo" variant="h6" sx={{ minWidth: 100, mr: 3 }}>
          ZRARA
        </span>
      </Link>
      <div className="navbar_nav-menu">
        {nav.map((m, index) => (
          <p
            className="categories-nav"
            key={index}
          >
            <Link
              to={m.link}
              color="inherit"
              underline="none"
            >
              {m.item}
            </Link>
          </p>
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
