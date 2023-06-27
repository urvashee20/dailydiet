import React, { useEffect, useState } from "react";
import Container from "../../templates/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import BmrCalculator from "../../organisms/BMRCalculator/BMRCalculator";
import DemandEditor from "../../organisms/DemandEditor/DemandEditor";
import UserDataEditor from "../../organisms/UserDataEditor/UserDataEditor";
import { Redirect } from "react-router-dom";
import Diary from "../../organisms/Diary/Diary";
import Meal from "../../organisms/Meal/Meal";
import ProductCreator from "../../organisms/ProductCreator/ProductCreator";
import UserItems from "../../molecules/UserItems/UserItems";
import {
  preferences,
  otherCategories,
  userItemCategories,
  actions,
} from "../../../data/constants";
import {
  currentCategoryRemoved,
  currentItemRemoved,
  productsRemoved,
  mealsRemoved,
  itemCreateModeRemoved,
  currentCategorySet,
} from "../../../store/helpers";
import decode from "jwt-decode";
import {
  DividedSection,
  LeftContainer,
  RightContainer,
  Sidebar,
  CategoryHeader,
} from "./UserProfileStyles";
import MenuItemsList from "../../molecules/MenuItemsList/MenuItemsList";
import SmallArticle from "../../molecules/SmallArticle/SmallArticle";
import Gallery from "../../organisms/Gallery/Gallery";
import ActionsList from "../../molecules/ActionsList/ActionsList";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const [redirect, setRedirect] = useState(false);

  const { currentUser } = useSelector((state) => state.user.authData);

  useEffect(() => {
    if (!currentUser) {
      setRedirect(true);
    }
  }, [currentUser]);

  useEffect(() => {
    dispatch(currentCategorySet("preferences"));
    return () => {
      dispatch(currentItemRemoved());
      dispatch(currentCategoryRemoved());
      dispatch(productsRemoved());
      dispatch(mealsRemoved());
      dispatch(itemCreateModeRemoved());
    };
  }, [dispatch]);

  const token = user?.credential;
  const decodedToken = decode(token);

  const creator =
    decodedToken?.iss === "https://accounts.google.com"
      ? decodedToken.email
      : decodedToken.id;

  const diaries = useSelector((state) =>
    state.resources.diaries.diaries.filter((diary) => diary.creator === creator)
  );
  const allDiaries = useSelector((state) => state.resources.diaries.diaries);
  const allProducts = useSelector((state) => state.resources.products.products);

  const meals = useSelector((state) =>
    state.resources.meals.meals.filter((meal) => meal.creator === creator)
  );
  const products = useSelector((state) =>
    state.resources.products.products.filter(
      (product) => product.creator === creator
    )
  );
  const { status } = useSelector((state) => state.resources.diaries);

  const {
    currentItem,
    currentItemType,
    currentCategory,
    itemEditMode,
    itemCreateMode,
  } = useSelector((state) => state.user.helpers);

  const handleItems = (category) => {
    if (category === "diary") return diaries;
    if (category === "allDiaries") return allDiaries;
    if (category === "allProducts") return allProducts;
    if (category === "meal") return meals;
    if (category === "product") return products;
  };

  const noLoading = status !== "loading";

  const renderArticle = () => {
    return (
      currentCategory === "preferences" && (
        <SmallArticle
          left={<BmrCalculator editMode alternateView noMarginTop />}
          right={<DemandEditor />}
          footer={<UserDataEditor />}
        />
      )
    );
  };

  const matchCurrentItemType = (itemToMatch) => {
    return currentItem && currentItemType === itemToMatch;
  };

  const ifCurrentProduct = !currentItem || currentItemType === "product";

  return (
    <Container fillColor sectionMargin={"3rem 0 0 0"}>
      {redirect && <Redirect to={"/"} />}
      {ifCurrentProduct && (
        <Gallery
          altPadding
          text={"center"}
          justify={"center"}
          center
          description={`Hello, ${currentUser?.name}`}
          padding={"3rem 3rem 0 3rem"}
          titlePrimary={"Preferences"}
          titleSecondary={"Dashboard"}
        />
      )}
      {ifCurrentProduct && (
        <DividedSection padding={"0 3rem"} id={"dashboard"}>
          <LeftContainer>
            <Sidebar>
              <CategoryHeader>Preferences</CategoryHeader>
              <MenuItemsList
                items={preferences}
                currentCategory={currentCategory}
              />
              <CategoryHeader>Created items</CategoryHeader>
              <MenuItemsList
                items={userItemCategories}
                currentCategory={currentCategory}
              />
              <CategoryHeader>Community</CategoryHeader>
              <MenuItemsList
                items={otherCategories}
                currentCategory={currentCategory}
              />
              <CategoryHeader>Creator</CategoryHeader>
              <ActionsList
                items={actions}
                currentItem={currentItem}
                user={currentUser}
              />
            </Sidebar>
          </LeftContainer>
          <RightContainer>
            {!currentCategory && (
              <UserItems
                items={handleItems("allDiaries")}
                status={status}
                category={"allDiaries"}
              />
            )}
            {noLoading && renderArticle()}
            {["diary", "meal", "product", "allDiaries", "allProducts"].includes(
              currentCategory
            ) &&
              !currentItem &&
              !itemCreateMode &&
              !itemEditMode && (
                <UserItems
                  items={handleItems(currentCategory)}
                  status={status}
                  category={currentCategory}
                />
              )}
            {(matchCurrentItemType("product") ||
              itemEditMode ||
              itemCreateMode ||
              currentCategory === "createProduct") &&
              currentCategory !== "preferences" && (
                <ControlPanel margin={"2rem 0"} justify={"left"}>
                  <ProductCreator
                    editMode={
                      (itemEditMode || currentCategory === "product") &&
                      !itemCreateMode
                    }
                  />
                </ControlPanel>
              )}
          </RightContainer>
        </DividedSection>
      )}
      {matchCurrentItemType("diary") && (
        <ControlPanel margin={"2rem 0"}>
          <Diary creatorAdjustment editMode={currentCategory === "diary"} />
        </ControlPanel>
      )}

      {matchCurrentItemType("meal") && (
        <ControlPanel margin={"2rem 0"}>
          <Meal editMode />
        </ControlPanel>
      )}
    </Container>
  );
};

export default UserProfile;
