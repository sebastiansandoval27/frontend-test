import React, { useContext, useEffect, useState } from "react";
import SearchBarIcon from "../assets/ic_Search@2x.png";
import { useHistory } from "react-router-dom";
import { ProductsContext } from "../context/productsContext";

const SearchBar = () => {
  const [products, setProducts] = useContext(ProductsContext);
  const [value, setValue] = useState(products.query || "");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts({
      ...products,
      query: value,
    });
    history.push(`/items?search=${value}`);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="input"
        placeholder="Nunca dejes de buscar"
        onKeyDown={onKeyDown}
        onChange={handleChange}
        value={value}
      />
      <button disabled={!value} className="button" onClick={handleSubmit}>
        <img src={SearchBarIcon} alt="Icon" />
      </button>
    </div>
  );
};

export default SearchBar;
