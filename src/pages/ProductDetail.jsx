import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import NumberFormat from "react-number-format";
import Loader from "../components/Loader";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = () => {
    if (id) {
      setLoading(true);
      axios
        .get(`http://localhost:8080/api/items/${id}`)
        .then((res) => {
          setProduct(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  // photo, status, sell, name, price, desc
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="breadcrumb">
            {product?.categories && (
              <BreadCrumbs
                categories={product?.categories.map((category) => ({
                  id: category.id,
                  name: category.name,
                }))}
              />
            )}
          </div>
          <section className="product-detail">
            {!loading && product?.item && (
              <>
                <div className="photo">
                  <img
                    src={product.item.picture.url}
                    alt={`Photo - ${product.item.title}`}
                  />
                </div>
                <div className="name">
                  <span>
                    {product.item.condition.value_name || "Nuevo"} -{" "}
                    {product.item.sold_quantity} vendidos
                  </span>
                  <h3>{product.item.title}</h3>
                  <h2>
                    <NumberFormat
                      value={product.item.price.amount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </h2>
                  <button>Comprar</button>
                </div>
                <div className="desc">
                  <h3>Descripción del producto</h3>
                  <p>{product.item.description}</p>
                </div>
              </>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default ProductDetail;
