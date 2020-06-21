import React from "react";
import { useParams } from "react-router-dom";

const LaunchShoe = () => {
  const { slug } = useParams();

  const shoe = shoes[slug];

  const { name, img } = shoe;

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
};

export default LaunchShoe;
