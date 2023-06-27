import React from "react";
import { Container, StyledInput } from "./TableSearchBarStyles";

const TableSearchBar = ({ data, filter, placeholder, align }) => {
  const handleFilter = (e) => {
    if (e.target.value.trim().length >= 1) {
      const searchData = e.target.value.trim();
      const newFilter = data.filter((item) => {
        return item.title.toLowerCase().includes(searchData.toLowerCase());
      });
      if (searchData === "") {
        filter(null);
      } else {
        filter(newFilter);
      }
    } else {
      filter(null);
    }
  };

  return (
    <Container align={align}>
      <StyledInput
        text
        type="text"
        placeholder={placeholder}
        onChange={handleFilter}
      />
    </Container>
  );
};

export default TableSearchBar;
