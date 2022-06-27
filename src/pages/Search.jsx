import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductsContext } from "../context/productsContext";

const Search = (props) => {
  const search = props.location.search;
  const queryParam = new URLSearchParams(search);
  const [products, setProducts] = useContext(ProductsContext);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    let q = queryParam.get("search");
    if (q) {
      setLoading(true);
      axios
        .get(`http://localhost:8080/api/items?q=${q}`)
        .then((res) => {
          setResults(res.data);
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
  }, [products]);

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <section className="search-results">
          <div className="container">
            <ul>
              {Array.isArray(results.items) &&
                results.items.map((product) => (
                  <li key={product.id}>
                    <h4>{product.title}</h4>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Search;
