import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LaunchIndex = () => {
  const shoes = useSelector(state => state.shoes);
  return (
    <div className="container_launch">
      <ul>
        {Object.entries(shoes).map(([slug, { name, img, cart }]) => (
          <li key={slug}>
            <Link to={`/launch/${slug}`}>
              <img className="img_launch" src={img} alt={name} />
              <h2>{name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LaunchIndex;
