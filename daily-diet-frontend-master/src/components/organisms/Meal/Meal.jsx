import React, { useState } from "react";
import Container from "../../templates/Container/Container";
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import ProductReadOnly from "../ProductReadOnly/ProductReadOnly";
import { ProductsContainer, StyledSpan } from "./MealStyles";
import Summary from "../Summary/Summary";
import Gallery from "../Gallery/Gallery";
import { useDispatch, useSelector } from "react-redux";
import { modalOpened } from "../../../store/helpers";
import {
  calculateMacrosForProducts,
  calculateDemandCoverage,
} from "../../../utils/calculators";
import {
  Actions,
  ProgressBarsContainer,
} from "../../../styles/globalComponentsStyles";
import RoundChart from "../RoundChart/RoundChart";
import SelectedProducts from "../SelectedProducts/SelectedProducts";
import {
  itemEditModeSet,
  editedProductsAdded,
  currentItemRemoved,
  productsRemoved,
  mealsRemoved,
} from "../../../store/helpers";
import SearchEngine from "../../molecules/SearchEngine/SearchEngine";
import { HashLink } from "react-router-hash-link";

const Meal = ({ editMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tdee, demandPercentage } = useSelector((state) =>
    state.user.authData.currentUser?.profile
      ? state.user.authData.currentUser.profile
      : { tdee: 0, demandPercentage: { protein: 0, carbs: 0, fat: 0 } }
  );

  const { temporaryProducts, itemEditMode } = useSelector(
    (state) => state.user.helpers
  );

  const { _id, nutrients, title, products } = useSelector((state) =>
    state.user.helpers.currentItem?._id
      ? state.user.helpers.currentItem
      : {
          _id: null,
          nutrients: null,
          title: null,
          createdAt: null,
          products: null,
        }
  );

  const dispatch = useDispatch();

  const demandData = calculateDemandCoverage(
    tdee,
    demandPercentage,
    nutrients,
    0
  );

  return (
    <Container>
      {editMode && itemEditMode ? (
        <Gallery
          smallText
          center
          text={"center"}
          justify={"center"}
          padding={"0rem 3rem 3rem 3rem"}
          titleSecondary={title}
          children={
            <>
              {(temporaryProducts.length !== 0 || itemEditMode) && (
                <SelectedProducts editMode />
              )}
              <Button
                add
                margin={"0.5rem"}
                align={"center"}
                width={"fit-content"}
                onClick={() => setIsModalOpen(true)}
              >
                Add product
              </Button>
              {isModalOpen && <SearchEngine isOpen={setIsModalOpen} />}
            </>
          }
        />
      ) : (
        <Gallery
          center
          smallText
          text={"center"}
          justify={"center"}
          padding={"0rem 3rem 3rem 3rem"}
          titleSecondary={title}
          children={
            <ProductsContainer id="product-select-editor">
              <StyledSpan>Caloric demand:&nbsp;{tdee}</StyledSpan>
              <ProgressBarsContainer>
                {Object.keys(demandData).map((key, id) => (
                  <RoundChart
                    data={[demandData[key]]}
                    label={key}
                    size={"50%"}
                    nameSize={"8px"}
                    valueSize={"12px"}
                    offset={-4}
                    ringSize={"60%"}
                    key={id}
                  />
                ))}
              </ProgressBarsContainer>
              {products.map((ingredient) => (
                <ProductReadOnly
                  key={ingredient._id}
                  product={ingredient}
                  amount={ingredient.amount}
                />
              ))}
              <Summary centered data={calculateMacrosForProducts(products)} />
              <ControlPanel border fit padding={"1rem 0 0 0"}>
                {editMode && (
                  <>
                    <Button
                      margin={"0 0.5rem 0.5rem 0"}
                      onClick={() => {
                        dispatch(itemEditModeSet());
                        dispatch(editedProductsAdded({ products }));
                      }}
                      edit
                    >
                      Edit
                    </Button>
                    <Button
                      margin={"0 0.5rem 0.5rem 0"}
                      onClick={() => {
                        dispatch(
                          modalOpened({
                            message: "Delete meal?",
                            onClickAction: "deleteMeal",
                            onClickActionArg: _id,
                          })
                        );
                        dispatch(currentItemRemoved());
                      }}
                      remove
                    >
                      Delete
                    </Button>
                  </>
                )}
              </ControlPanel>
              <Actions>
                <HashLink to={"#top"}>
                  <Button
                    color={"black"}
                    margin={"1.5rem 0 0 0"}
                    align={"center"}
                    onClick={() => {
                      dispatch(currentItemRemoved());
                      dispatch(productsRemoved());
                      dispatch(mealsRemoved());
                    }}
                  >
                    Close
                  </Button>
                </HashLink>
              </Actions>
            </ProductsContainer>
          }
        />
      )}
    </Container>
  );
};

export default Meal;
