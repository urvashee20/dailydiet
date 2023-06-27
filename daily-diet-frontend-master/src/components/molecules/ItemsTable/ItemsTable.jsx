import { useDispatch } from "react-redux";
import Button from "../../atoms/Button/Button";
import { modalOpened } from "../../../store/helpers";
import {
  StyledTable,
  Head,
  HeadRow,
  Row,
  Data,
  Header,
  Body,
} from "./ItemsTableStyles";
import { capitalize } from "lodash";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { currentItemSet } from "../../../store/helpers";

const ItemsTable = ({ items, category, onSort, sorting }) => {
  const dispatch = useDispatch();
  const noActions = !(category === "allDiaries" || category === "allProducts");
  const multiplicator =
    category === "product" || category === "allProducts" ? 100 : 1;

  const renderSortIcon = (column) => {
    if (sorting.column !== column) return null;
    if (sorting.order === "asc") return <FaSortUp size={"0.8rem"} />;
    return <FaSortDown size={"0.8rem"} />;
  };

  const setItemType = (category) => {
    if (category === "allDiaries") return "diary";
    if (category === "allProducts") return "product";
    return category;
  };

  return (
    <StyledTable>
      <Head>
        <HeadRow>
          <Header onClick={() => onSort("title")}>
            Title {renderSortIcon("title")}
          </Header>
          <Header onClick={() => onSort("nutrients.kcal")}>
            Kcal{renderSortIcon("nutrients.kcal")}
          </Header>
          <Header onClick={() => onSort("nutrients.protein")}>
            Protein{renderSortIcon("nutrients.protein")}
          </Header>
          <Header onClick={() => onSort("nutrients.carbs")}>
            Carbs{renderSortIcon("nutrients.carbs")}
          </Header>
          <Header onClick={() => onSort("nutrients.fat")}>
            Fat{renderSortIcon("nutrients.fat")}
          </Header>
          {(category === "diary" || category === "allDiaries") && (
            <Header onClick={() => onSort("ratingPublic.average")}>
              Rating{renderSortIcon("ratingPublic.average")}
            </Header>
          )}
        </HeadRow>
      </Head>
      <Body>
        {items.map((item) => (
          <Row key={item._id}>
            <Data
              onClick={() =>
                dispatch(
                  currentItemSet({
                    item: item,
                    type: setItemType(category),
                  })
                )
              }
            >
              {item.title}
            </Data>
            <Data>{(item.nutrients.kcal * multiplicator).toFixed(1)}</Data>
            <Data>{(item.nutrients.protein * multiplicator).toFixed(1)}</Data>
            <Data>{(item.nutrients.carbs * multiplicator).toFixed(1)}</Data>
            <Data>{(item.nutrients.fat * multiplicator).toFixed(1)}</Data>
            {(category === "diary" || category === "allDiaries") && (
              <Data>{item?.ratingPublic?.average.toFixed(1) || 0}</Data>
            )}
            {noActions && (
              <Data>
                <Button
                  margin={"0 0 0.5rem 0"}
                  onClick={() =>
                    dispatch(
                      modalOpened({
                        message: `Delete ${category}?`,
                        onClickAction: `delete${capitalize(category)}`,
                        onClickActionArg: item._id,
                      })
                    )
                  }
                  remove
                >
                  Delete
                </Button>
              </Data>
            )}
          </Row>
        ))}
      </Body>
    </StyledTable>
  );
};
export default ItemsTable;
