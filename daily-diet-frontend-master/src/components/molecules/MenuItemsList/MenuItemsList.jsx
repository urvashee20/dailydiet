import MenuItem from "../MenuItem/MenuItem";
import { useDispatch } from "react-redux";
import {
  currentCategorySet,
  itemCreateModeRemoved,
  currentItemRemoved,
  productsRemoved,
  mealsRemoved,
} from "../../../store/helpers";
import { NavHashLink } from "react-router-hash-link";

const MenuItemsList = ({ items, currentCategory }) => {
  const dispatch = useDispatch();
  return (
    <>
      {items.map((category) => (
        <NavHashLink
          key={category.name}
          to={"#dashboard"}
          style={{ color: "black" }}
        >
          <MenuItem
            key={category.id}
            {...category}
            active={currentCategory === category.name}
            onClick={() => {
              dispatch(currentCategorySet(category.name));
              dispatch(itemCreateModeRemoved());
              dispatch(currentItemRemoved());
              dispatch(productsRemoved());
              dispatch(mealsRemoved());
            }}
          />
        </NavHashLink>
      ))}
    </>
  );
};
export default MenuItemsList;
