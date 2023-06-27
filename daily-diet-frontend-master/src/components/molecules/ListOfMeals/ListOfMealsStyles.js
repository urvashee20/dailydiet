import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin: ${({ margin }) => (margin ? margin : "0")};
`;

export const TitleInput = styled.input`
  width: ${({ text }) => (text ? "250px" : "100px")};
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid lightgray;
  border-radius: 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: ${({ text }) => (text ? "100%" : "100px")};
  }
`;
