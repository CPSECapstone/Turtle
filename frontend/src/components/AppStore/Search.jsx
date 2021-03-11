import React, { Component } from "react";
import { SearchBar, Input, Field } from "./AppStore.styled";

const Search = props => {

  return (
    <SearchBar>
      <Input>
        <Field
          value={props.appValue}
          onChange={props.onChangeHandler}
          className="prompt"
          type="text"
          placeholder="Search Apps"
        />
      </Input>
      <div className="results" />
    </SearchBar>
  );
};

export default Search;