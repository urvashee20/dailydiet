import { useState } from "react";
import { TitleInput, List, ListItem } from "./ListOfMealsStyles";
import Summary from "../../organisms/Summary/Summary";
import Product from "../../organisms/Product/Product";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import Button from "../../atoms/Button/Button";
import { Separator } from "../../atoms/Separator/SeparatorStyles";
import { useDispatch } from "react-redux";
import { mealRemoved, mealTitleUpdated } from "../../../store/helpers";
import SearchEngine from "../SearchEngine/SearchEngine";

const ListOfMeals = ({ meals }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mealId, setMealId] = useState(false);

  const handleChangeTitle = (e, id) => {
    e.preventDefault();
    dispatch(mealTitleUpdated({ mealId: id, title: e.target.value }));
  };

  return (
    <List>
      {meals.length !== 0 &&
        meals.map(({ id, title, products, nutrients }) => (
          <ListItem key={id} margin={"1.5rem 0"}>
            <Separator margin={"0 0 1rem 0"} />
            <TitleInput
              text
              type="text"
              placeholder={title}
              onChange={(e) => handleChangeTitle(e, id)}
            />
            {products.map((product) => (
              <Product
                mealEditMode
                mealId={id}
                key={product.id}
                product={product}
                amount={product.amount}
              />
            ))}
            <Summary centered data={nutrients} />
            <ControlPanel justify={"left"}>
              <Button
                add
                margin={"0 0.5rem 0.5rem 0"}
                onClick={() => {
                  setIsModalOpen(true);
                  setMealId(id);
                }}
              >
                Add product
              </Button>
              <Button
                remove
                margin={"0 0.5rem 0.5rem 0"}
                onClick={() => {
                  dispatch(mealRemoved({ id }));
                }}
              >
                Delete meal
              </Button>
            </ControlPanel>
          </ListItem>
        ))}
      {isModalOpen && (
        <SearchEngine
          mealEditMode={true}
          mealId={mealId}
          isOpen={setIsModalOpen}
        />
      )}
    </List>
  );
};
export default ListOfMeals;
