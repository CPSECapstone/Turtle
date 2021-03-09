import React from "react";

const Search = props => {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          value={props.appValue}
          onChange={props.onChangeHandler}
          className="prompt"
          type="text"
          placeholder="Search Apps"
        />
      </div>
      <div className="results" />
    </div>
  );
};

export default Search;
