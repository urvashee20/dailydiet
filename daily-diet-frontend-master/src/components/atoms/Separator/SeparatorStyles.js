import styled from "styled-components";

export const Separator = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  height: 1px;
  border-top: ${({ color }) =>
    color ? `1px solid ${color}` : "1px solid #eaeaea"};
`;
