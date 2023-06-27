import styled from "styled-components";

export const List = styled.ul`
  border-top: ${({ border }) => (border ? "1px solid #eaeaea" : "")};
  padding-top: ${({ border }) => (border ? "1rem" : "")};
  flex-wrap: ${({ nowrap }) => (nowrap ? "nowrap" : "wrap")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
  overflow: ${({ overflow }) => (overflow ? overflow : "initial")};
  padding: ${({ padding }) => (padding ? `${padding}` : "0")};
  list-style: none;
  display: flex;
  align-items: ${({ align }) => (align ? `${align}` : "center")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  max-width: 1280px;
  gap: ${({ nogap }) => (nogap ? 0 : "1rem")};

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: 100%;
    flex-wrap: wrap;
    margin: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
    flex-wrap: wrap;
    margin: 0;
  }
`;
