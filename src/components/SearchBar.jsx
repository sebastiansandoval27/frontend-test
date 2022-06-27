import React, { useState } from "react";
import SearchBarIcon from "../assets/ic_Search@2x.png";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ENTER");
    history.push(`/items?search=${value}`);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      //searchData();
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
