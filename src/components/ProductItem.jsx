import React from "react";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router-dom";
import Shipping from "../assets/ic_shipping@2x.png";

const ProductItem = ({ id, price, name, city, photo, shipping }) => {
  const history = useHistory();

  const goToProductDetail = () => {
    history.push(`/items/${id}`);
  };

  return (
    <>
      <div className="product-item">
        <div className="photo">
          <img src={photo} alt="Product" onClick={goToProductDetail} />
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
