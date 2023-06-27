import { useState } from "react";
import { Nav, List, Item, Link } from "./PaginationStyles";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pageNumberLimit = 5;

  if (pagesCount === 1 || itemsCount === 0) return null;
  const pages = _.range(1, pagesCount + 1);

  const handleNextBtn = (page) => {
    if (page + 1 > 0 && page + 1 <= pagesCount) {
      onPageChange(page + 1);
      if (page + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  };

  const handlePrevBtn = (page) => {
    if (page - 1 > 0 && page - 1 <= pagesCount) {
      onPageChange(page - 1);
      if ((page - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  const renderPageIncrementBtn = () => {
    if (pages.length > maxPageNumberLimit) {
      return (
        <Item>
          <Link onClick={() => handleNextBtn(currentPage)}>&hellip;</Link>
        </Item>
      );
    }
  };

  const renderPageDecrementBtn = () => {
    if (minPageNumberLimit >= 1) {
      return (
        <Item>
          <Link onClick={() => handlePrevBtn(currentPage)}>&hellip;</Link>
        </Item>
      );
    }
  };

  return (
    <Nav>
      <List>
        <Item>
          <Link onClick={() => handlePrevBtn(currentPage)}>&lt;</Link>
        </Item>
        {renderPageDecrementBtn()}
        {pages.map((page) => {
          if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
            return (
              <Item key={page}>
                <Link
                  onClick={() => onPageChange(page)}
                  active={page === currentPage}
                >
                  {page}
                </Link>
              </Item>
            );
          } else {
            return null;
          }
        })}
        {renderPageIncrementBtn()}
        <Item>
          <Link onClick={() => handleNextBtn(currentPage)}>&gt;</Link>
        </Item>
      </List>
    </Nav>
  );
};
export default Pagination;
