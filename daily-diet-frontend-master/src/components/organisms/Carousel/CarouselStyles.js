import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1280px;
  padding: 1rem;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  background-color: ${({ theme, background }) =>
    background ? theme.colors.backgroundPrimary : "transparent"};

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    padding: 1rem 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem 0;
  }
`;

export const chunks = {
  0: {
    items: 1,
  },
  550: {
    items: 1,
  },
  760: {
    items: 2,
  },
  960: {
    items: 2,
  },
  1022: {
    items: 3,
  },
  1278: {
    items: 3,
  },
  1610: {
    items: 3,
  },
  2550: {
    items: 4,
  },
};
