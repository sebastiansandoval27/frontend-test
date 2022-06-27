import React from "react";
import NumberFormat from "react-number-format";

import Shipping from "../assets/ic_shipping@2x.png";

const ProductItem = ({ price, name, city, photo, shipping }) => {
  return (
    <>
      <div className="product-item">
        <div className="photo">
          <img src={photo} alt="Product" />
        </div>
        <div className="content">
          <h3>
            {price && (
              <NumberFormat
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            )}
            {shipping?.free_shipping && (
              <img src={Shipping} alt="Free Shipping" />
            )}
          </h3>
          <h2>{name && name}</h2>
        </div>
        <span className="city">{city && city}</span>
      </div>
      <hr className="divider" />
    </>
  );
};

export default ProductItem;
