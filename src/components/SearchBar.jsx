import React, { useEffect, useState } from "react";
import SearchBarIcon from "../assets/ic_Search@2x.png";
import { useHistory } from "react-router-dom";
import { validText } from "../utils/valid";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const search = window.location.search;
  const queryParam = new URLSearchParams(search);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = validText(value);
    if (isValid) {
      history.push(`/items?search=${value}`);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    let currentValue = queryParam.get("search");
    if (currentValue) setValue(currentValue);
  }, [search]);

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
