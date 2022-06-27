import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = (props) => {
  const search = props.location.search;
  const queryParam = new URLSearchParams(search);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    let q = queryParam.get("search");
    if (q) {
      setLoading(true);
      axios
        .get(`http://localhost:8080/api/items?q=${q}`)
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div>
          <ul>
            {Array.isArray(products.items) &&
              products.items.map((product) => (
                <li key={product.id}>
                  <h4>{product.title}</h4>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Search;
