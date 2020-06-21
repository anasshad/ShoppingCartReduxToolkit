import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux";

const LaunchIndex = () => {
  const shoes = useSelector(state => state.shoes);
  const dispatch = useDispatch();
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img, cart }]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
          <button disabled={cart} onClick={() => dispatch(addCart(slug))}>
            {cart ? "Added to Cart" : "Add to Cart"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LaunchIndex;
