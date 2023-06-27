import styled from "styled-components";

export const DividedSection = styled.section`
  max-width: 1280px;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 20fr 80fr;
  padding: ${({ padding }) => (padding ? padding : "3rem")};

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    padding: 0 1rem 1rem 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0 1rem 1rem 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0 1rem 1rem 1rem;
    grid-template-columns: 10fr 90fr;
    gap: 0.5rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 1rem 1rem;
  justify-content: center;
  align-self: start;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem 0.5rem 1rem 0;
    max-width: 100%;
  }
`;

export const RightContainer = styled.div`
  padding: 1rem 1rem 1rem 0;
  overflow: scroll;
  display: grid;
  align-content: space-between;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem 0;
    max-width: 100%;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  @media ${({ theme }) => theme.breakpoints.sm} {
    align-items: center;
  }
`;

export const CategoryHeader = styled.h3`
  white-space: pre-line;
  text-align: left;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.green};
  display: block;
  font-size: ${({ small }) => (small ? "0.8rem" : "1rem")};
  text-transform: uppercase;
  margin: 0.5rem 0 0.5rem 0.5rem;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 0.9rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.6rem;
    margin: 0.5rem 0;
    text-align: center;
  }
`;
