import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;
`;

export const Right = styled.div`
  width: 100%;
  height: 100%;
`;
