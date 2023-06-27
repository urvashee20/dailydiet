import styled from "styled-components";

export const StyledImage = styled.img`
  width: ${({ width }) => (width ? `${width}` : "80%")};
  border-radius: 25px;
  pointer-events: none;

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: ${({ width }) => (width ? `${width}` : "90%")};
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: ${({ width }) => (width ? `${width}` : "80%")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  color: white;
  display: flex;
  justify-content: ${({ justify }) => (justify ? `${justify}` : "")};
`;
