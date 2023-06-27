import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  min-height: 100%;
  width: 100%;
`;

export const Head = styled.thead``;

export const Header = styled.th`
  padding: 6px 10px 6px 0;
  cursor: pointer;
`;

export const HeadRow = styled.tr``;

export const Row = styled.tr`
  height: 3.5rem;
  font-size: 1rem;
  border-bottom: 1px solid #eaeaea;

  :last-child {
    border-bottom: none;
  }
`;

export const Data = styled.td`
  padding: 0.5rem 0.8rem 0.5rem 0;
  min-width: 100px;

  :first-child {
    min-width: 270px;
    cursor: pointer;

    transition: all 0.1s ease-in-out;
    :hover {
      color: ${({ theme }) => theme.colors.green};
      font-weight: 700;
    }
  }
`;

export const Body = styled.tbody``;
