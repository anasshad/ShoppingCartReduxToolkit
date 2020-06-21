import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const cartCount = useSelector(state => Object.keys(state.cart).length);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/launch">Launch</Link>
      <Link to="/cart">{`Cart ${cartCount}`}</Link>
    </nav>
  );
};

export default Nav;
