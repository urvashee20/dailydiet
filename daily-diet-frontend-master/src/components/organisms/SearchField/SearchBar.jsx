import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  SearchList,
  StyledListItem,
  StyledInput,
  IconContainer,
} from "./SearchBarStyles";
import { productAdded, mealUpdated } from "../../../store/helpers";
import {
  GiGrainBundle,
  GiFruitBowl,
  GiMeat,
  GiMilkCarton,
} from "react-icons/gi";
import { RiLeafLine } from "react-icons/ri";
import { IoFishOutline } from "react-icons/io5";
import { BsBox, BsDroplet } from "react-icons/bs";

const SearchBar = ({ data, placeholder, mealEditMode, mealId, align }) => {
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    if (e.target.value.length >= 3) {
      const searchData = e.target.value;
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchData.toLowerCase());
      });
      if (searchData === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    } else {
      setFilteredData([]);
    }
  };

  const renderIcon = (category) => {
    if (category === "grain") {
      return <GiGrainBundle />;
    }
    if (category === "fish") {
      return <IoFishOutline />;
    }
    if (category === "fruit") {
      return <GiFruitBowl />;
    }
    if (category === "meat") {
      return <GiMeat />;
    }
    if (category === "dairy") {
      return <GiMilkCarton />;
    }
    if (category === "drink") {
      return <BsDroplet />;
    }
    if (category === "vegetable") {
      return <RiLeafLine />;
    } else {
      return <BsBox />;
    }
  };

  return (
    <Container align={align}>
      <StyledInput
        text
        id="ingredient-input"
        type="text"
        placeholder={placeholder}
        onChange={handleFilter}
      />
      {filteredData.length !== 0 && (
        <SearchList>
          {filteredData.map((item) => (
            <StyledListItem
              onClick={
                mealEditMode
                  ? () => {
                      dispatch(mealUpdated({ product: item, mealId }));
                      setFilteredData([]);
                    }
                  : () => {
                      dispatch(productAdded({ product: item }));
                      setFilteredData([]);
                    }
              }
              key={item._id}
            >
              <IconContainer>{renderIcon(item.category)}</IconContainer>
              {item.title}
            </StyledListItem>
          ))}
        </SearchList>
      )}
    </Container>
  );
};

export default SearchBar;
