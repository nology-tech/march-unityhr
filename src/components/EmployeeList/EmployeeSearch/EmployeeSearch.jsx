import React, { useState } from "react";
import "./EmployeeSearch.scss";

const Search = (props) => {
  const { onChange } = props;
  const [employeeSearch, setEmployeeSearch] = useState("");

  const changeHandler = (e) => {
    setEmployeeSearch(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        data-testid="searchTerm"
        className="search-employee"
        type="text"
        placeholder="Search employee"
        value={employeeSearch}
        onChange={changeHandler}
      ></input>
    </div>
  );
};

export default Search;
