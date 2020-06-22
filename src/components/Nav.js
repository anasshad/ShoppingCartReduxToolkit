import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const cartCount = useSelector(state => Object.keys(state.cart).length);
  return (
    <nav style={{ fontSize: "0.9em" }}>
      <Link to="/">HOME</Link>
      {"/"}
      <Link to="/launch">LAUNCH</Link>
      {"/"}
      <Link to="/cart">{`CART ${cartCount}`}</Link>
    </nav>
  );
};

export default Nav;
