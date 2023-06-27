import styled from "styled-components";

export const Section = styled.section`
  display: ${({ grid }) => (grid ? "grid" : "flex")};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: ${({ sectionMargin }) => (sectionMargin ? sectionMargin : "1rem 0")};

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  font-size: ${({ smaller }) => (smaller ? "1.1rem" : "1.2rem")};
  font-weight: 300;
  color: black;
  text-align: ${({ text }) => (text ? text : "left")};
  width: 100%;
  max-width: 1280px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ smaller }) => (smaller ? "0.8rem" : "1rem")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ smaller }) => (smaller ? "0.8rem" : "1rem")};
    text-align: ${({ center }) => (center ? "center" : "")};
  }
`;

export const Background = styled.div`
  background: ${({ background }) => {
    if (background) return `url(${background}) center no-repeat`;
    else return "white";
  }};
  background-size: cover;
  min-height: ${({ height }) => (height ? height : "")};
  display: grid;
`;
