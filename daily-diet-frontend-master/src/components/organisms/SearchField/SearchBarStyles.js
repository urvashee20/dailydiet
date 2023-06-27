import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : "center")};
`;

export const StyledInput = styled.input`
  width: 250px;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const SearchList = styled.ul`
  padding: 0;
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconContainer = styled.div`
  margin: 0 0.2rem 0 0;
`;

export const StyledListItem = styled.li`
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0.5rem 0 0 0;
  }
`;
