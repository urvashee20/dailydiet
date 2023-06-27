import { ListItem, Primary, Secondary } from "./ItemStyles";

const Item = ({ primary, secondary, margin, smMargin }) => {
  return (
    <ListItem margin={margin} smMargin={smMargin}>
      <Primary>{primary}</Primary>
      <Secondary>{secondary}</Secondary>
    </ListItem>
  );
};
export default Item;
