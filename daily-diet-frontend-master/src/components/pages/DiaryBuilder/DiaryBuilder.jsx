import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import SelectedMeals from "../../organisms/SelectedMeals/SelectedMeals";
import SelectedProducts from "../../organisms/SelectedProducts/SelectedProducts";
import Container from "../../templates/Container/Container";
import Gallery from "../../organisms/Gallery/Gallery";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import Card2 from "../../molecules/Card2/Card2";
import { useDispatch, useSelector } from "react-redux";
import { diaryBuilderSteps } from "../../../data/constants";
import Title from "../../atoms/Title/Title";
import { productsRemoved, mealsRemoved } from "../../../store/helpers";
import SearchEngine from "../../molecules/SearchEngine/SearchEngine";

const DiaryBuilder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { temporaryProducts, temporaryMeals } = useSelector(
    (state) => state.user.helpers
  );

  const bmr = useSelector((state) =>
    state.user.authData.currentUser?.profile.bmr
      ? state.user.authData.currentUser.profile.bmr
      : 0
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(productsRemoved());
      dispatch(mealsRemoved());
    };
  }, [dispatch]);

  return (
    <Container id="diarybuilder" fillColor>
      <Gallery
        text={"center"}
        justify={"center"}
        center
        description={
          "Diet diaries are made up of meals, which in turn are made up of the products you have chosen. You can save built meals as templates and use them later."
        }
        padding={"3rem"}
        titlePrimary={"Build your diary by"}
        titleSecondary={"Following These Steps"}
        children={
          <>
            <ControlPanel align={"baseline"}>
              {diaryBuilderSteps.map((step) => (
                <Card2 fillColor {...step} key={step.id} />
              ))}
            </ControlPanel>
            <Title text={"center"} titlePrimary={"Diary Creator"} />
            {bmr ? (
              <>
                {temporaryMeals.length !== 0 && <SelectedMeals />}
                {temporaryProducts.length !== 0 && <SelectedProducts />}
                <Button
                  add
                  margin={"0.5rem"}
                  width={"fit-content"}
                  onClick={() => setIsModalOpen(true)}
                >
                  Add product
                </Button>
              </>
            ) : (
              <LinkItem
                add={1}
                hash={1}
                color={"white"}
                padding={"0.6rem"}
                margin={"2rem 0"}
                radius={"10px"}
                to={"/profile#top"}
                children={"Get BMR & TDEE"}
                size={"0.8rem"}
              />
            )}
          </>
        }
      />
      {isModalOpen && <SearchEngine isOpen={setIsModalOpen} />}
    </Container>
  );
};

export default DiaryBuilder;
