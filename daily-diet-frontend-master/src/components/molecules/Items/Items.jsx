import { List } from "./ItemsStyles";

const Items = ({ children, margin, justify, nowrap, nogap }) => {
  return (
    <List margin={margin} justify={justify} nowrap={nowrap} nogap={nogap}>
      {children}
    </List>
  );
};
export default Items;
