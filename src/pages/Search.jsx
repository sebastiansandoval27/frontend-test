import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import BreadCrumbs from "../components/BreadCrumbs";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Search = (props) => {
  const search = props.location.search;
  const queryParam = new URLSearchParams(search);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
          setError(true);
        });
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <section className="search-results">
          <div className="container">
            {results?.items && results.items.length > 0 && (
              <BreadCrumbs
                categories={[
                  {
                    id: 1,
                    name: results.items[0].domain_id,
                  },
                ]}
              />
            )}
            <div className="items">
              {Array.isArray(results.items) &&
                results.items.map((product) => (
                  <ProductItem
                    key={product.id}
                    name={product.title}
                    price={product.price}
                    city={product.address.city_name}
                    photo={product.thumbnail}
                    shipping={product.shipping}
                    id={product.id}
                  />
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Search;
