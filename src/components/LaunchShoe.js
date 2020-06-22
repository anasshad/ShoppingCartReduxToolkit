import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux";

const LaunchShoe = () => {
  const { slug } = useParams();
  const shoe = useSelector(state => state.shoes[slug]);
  const dispatch = useDispatch();

  const { name, img, cart } = shoe;

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  return (
    <div style={{ display: "flex" }}>
      <img className="img_launchShoe" src={img} alt={name} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "2%"
        }}
      >
        <h2 style={{ color: "#be0000" }}>PRODUCT</h2>
        <h4>{name}</h4>
        <br />
        <button disabled={cart} onClick={() => dispatch(addCart(slug))}>
          {cart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default LaunchShoe;
