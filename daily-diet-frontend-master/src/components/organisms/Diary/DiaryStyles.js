import styled from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  background-color: white;
  border-radius: 25px;
  margin: ${({ margin }) => (margin ? margin : "1rem 0 0 0")};
  padding: 2rem;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  min-width: 100%;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
    margin: 1rem 0 0 0;
  }
`;

export const ProgressBarsContainer = styled.ul`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledSpan = styled.span`
  display: flex;
  margin: 1rem 0;
  font-size: 1rem;
  justify-content: center;
`;

export const DiaryInput = styled.input`
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

export const ElementsList = styled.ul`
  flex-wrap: wrap;
  font-size: 1.2rem;
  margin: 1rem 0;
  list-style: none;
  display: flex;
`;
