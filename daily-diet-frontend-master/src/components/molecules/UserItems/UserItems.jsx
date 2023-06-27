import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Pagination from "../Pagination/Pagination";
import { paginate } from "../../../utils/helpers";
import ItemsTable from "../ItemsTable/ItemsTable";
import TableSearchBar from "../../organisms/TableSearchBar/TableSearchBar";
import _ from "lodash";
import { Separator } from "../../atoms/Separator/SeparatorStyles";
import { InnerContainer } from "../../../styles/globalComponentsStyles";

const UserItems = ({ items, category, status }) => {
  const [sorting, setSorting] = useState({
    column: "title",
    order: "asc",
  });
  const [pageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState(null);
  const [key, setKey] = useState(null);
  const [searchKey, setSearchKey] = useState(undefined);
  const isLoading = status === "loading";

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
    setFilteredItems(null);
    setSorting({
      column: "title",
      order: "asc",
    });
    setKey(Math.random());
    setSearchKey(Math.random());
  }, [category]);

  if (items.length === 0) return <p>No items</p>;

  const sorted = _.orderBy(items, [sorting.column], [sorting.order]);

  const sortedItems = paginate(sorted, currentPage, pageSize);

  const handleSort = (column) => {
    const sortingColumn = { ...sorting };
    if (sortingColumn.column === column)
      sortingColumn.order = sortingColumn.order === "asc" ? "desc" : "asc";
    else {
      sortingColumn.column = column;
      sortingColumn.order = "asc";
    }

    setSorting(sortingColumn);
  };

  const handleFilter = (data) => {
    if (data) {
      const sorted = _.orderBy(data, [sorting.column], [sorting.order]);
      const filtered = paginate(sorted, currentPage, pageSize);
      setFilteredItems(filtered);
      setCurrentPage(1);
    } else {
      setFilteredItems(null);
    }
  };

  const handleSortFiltered = (data) => {
    if (data) {
      const sorted = _.orderBy(data, [sorting.column], [sorting.order]);
      const filtered = paginate(sorted, currentPage, pageSize);
      return filtered;
    }
    return null;
  };

  const handleItems = () => {
    if (!filteredItems) return sortedItems;
    if (filteredItems.length === 0) return filteredItems;
    return handleSortFiltered(filteredItems);
  };

  const handleItemsCount = () => {
    if (!filteredItems) return items.length;
    if (filteredItems.length === 0) return 0;
    return filteredItems.length;
  };

  return (
    <>
      {isLoading ? (
        <ClipLoader loading={isLoading} size={150} />
      ) : (
        <>
          <InnerContainer>
            <TableSearchBar
              data={items}
              filter={handleFilter}
              placeholder={"Search..."}
              align={"left"}
              key={searchKey}
            />
            <Separator color={"lightgray"} margin={"0 0 1rem 0"} />
            <ItemsTable
              items={handleItems()}
              category={category}
              onSort={handleSort}
              sorting={sorting}
            />
          </InnerContainer>
          <Pagination
            onPageChange={handlePageChange}
            itemsCount={handleItemsCount()}
            currentPage={currentPage}
            pageSize={pageSize}
            key={key}
          />
        </>
      )}
    </>
  );
};
export default UserItems;
