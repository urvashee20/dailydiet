import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  margin: 0 0 1rem 0;
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
    width: fit-content;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: fit-content;
  }
`;
