import styled from "styled-components";

export const Nav = styled.nav`
  display: block;
  position: relative;
  padding: 1rem 0;
  margin: 1rem 0;
  border-top: 1px solid #eaeaea;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
`;

export const List = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Item = styled.li`
  position: relative;
  display: block;
  margin-left: -1px;
  border: 1px solid #eaeaea;
  border-radius: 0.25rem;
  cursor: pointer;

  :first-child {
    margin-left: 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  position: relative;
  display: block;
  padding: 0.5rem 0.9rem;
  margin-left: -1px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 0.25rem;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.backgroundPrimary : "white"};

  :first-child {
    margin-left: 0;
  }

  :hover {
    background-color: #eaeaea;
  }
`;
