import React from "react";

function Rating(props) {
  return (
    <div className="product-rating">
      {Array.from(Array(props.rating), (i) => {
        return <i  className="fa fa-star" key={i}></i>;
      })}
    </div>
  );
}

export default Rating;
