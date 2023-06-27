import styled from "styled-components";

export const StyledAnchor = styled.a`
  color: black;
  display: inline-block;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 1rem 1rem 1rem 0;
  border-radius: 10px;
  background-color: ${({ yellow, green, theme }) => {
    if (green ? 1 : 0) return `${theme.colors.green}`;
    if (yellow ? 1 : 0) return `${theme.colors.yellow};`;
    else return `white`;
  }};

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.03);
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 0.7rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.7rem;
  }
`;
