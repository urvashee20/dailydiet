import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  height: ${({ height }) => (height ? height : "")};
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;
`;

export const Right = styled.div`
  width: 100%;
  height: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 1rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;
