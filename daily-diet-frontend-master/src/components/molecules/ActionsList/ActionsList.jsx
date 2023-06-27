import MenuItem from "../MenuItem/MenuItem";
import { useDispatch } from "react-redux";
import {
  currentCategorySet,
  currentItemRemoved,
  itemCreateModeRemoved,
  itemCreateModeSet,
  mealsRemoved,
  productsRemoved,
} from "../../../store/helpers";
import ProfileLinkItem from "../../pages/UserProfile/ProfileLinkItem";
import { notify } from "../../../store/utils";

const ActionsList = ({ items, currentCategory, user }) => {
  const dispatch = useDispatch();

  const ifAccess = () =>
    user?.profile?.bmr ? "/builder#dashboard" : "/profile#dashboard";

  const renderOnClick = (category) => {
    dispatch(currentCategorySet(category.name));
    dispatch(itemCreateModeRemoved());
    dispatch(currentItemRemoved());
    dispatch(productsRemoved());
    dispatch(mealsRemoved());
    if (category.name === "createProduct") {
      return () => dispatch(itemCreateModeSet());
    } else {
      if (user?.profile?.bmr) {
        return null;
      } else {
        notify("You need BMR & TDEE");
        dispatch(currentCategorySet("preferences"));
      }
    }
  };

  return (
    <>
      {items.map((category) => (
        <ProfileLinkItem
          key={category.name}
          hash={1}
          to={
            category.name === "createProduct"
              ? "/profile#dashboard"
              : ifAccess()
          }
          onClick={() => renderOnClick(category)}
        >
          <MenuItem
            key={category.id}
            {...category}
            active={currentCategory === category.name}
          />
        </ProfileLinkItem>
      ))}
    </>
  );
};
export default ActionsList;
