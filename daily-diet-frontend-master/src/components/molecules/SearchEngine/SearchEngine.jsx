import React, { useEffect } from "react";
import { Overlay, Container, CloseButton } from "./SearchEngineStyles";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { useSelector } from "react-redux";
import SearchBar from "../../organisms/SearchField/SearchBar";
import { IoMdCloseCircleOutline } from "react-icons/io";

const SearchEngine = ({ mealEditMode, mealId, isOpen }) => {
  const { meals: mealList } = useSelector((state) => state.resources.meals);
  const { products: productList } = useSelector(
    (state) => state.resources.products
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <Overlay>
      <Container>
        <CloseButton>
          <IoMdCloseCircleOutline onClick={() => isOpen(false)} />
        </CloseButton>
        <ControlPanel padding={"1rem"} overflow={"scroll"}>
          <SearchBar
            mealEditMode={mealEditMode}
            mealId={mealId}
            placeholder="Start typing..."
            data={[...mealList, ...productList]}
          />
        </ControlPanel>
      </Container>
    </Overlay>
  );
};

export default SearchEngine;
