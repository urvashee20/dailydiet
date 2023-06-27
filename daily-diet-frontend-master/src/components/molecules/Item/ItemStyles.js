import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: baseline;
  margin: ${({ margin }) => (margin ? margin : "1rem 0 1.5rem 0")};

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    margin: 1rem 0.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: ${({ smMargin }) => (smMargin ? smMargin : "1rem")};
    align-items: left;
  }
`;

export const Secondary = styled.h5`
  font-size: ${({ small }) => (small ? "0.7rem" : "0.8rem")};
  font-weight: normal;
  text-align: ${({ text }) => (text ? text : "left")};
  letter-spacing: 1px;
  line-height: 1.3;
  white-space: pre-line;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ small }) => (small ? "0.8rem" : "0.7rem")};
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: ${({ small }) => (small ? "0.8rem" : "0.6rem")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ small }) => (small ? "0.8rem" : "0.6rem")};
  }
`;

export const Primary = styled.span`
  white-space: pre-line;
  text-align: ${({ text }) => (text ? text : "left")};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.green};
  display: block;
  font-size: ${({ small }) => (small ? "1rem" : "1.8rem")};
  text-transform: uppercase;
  margin-right: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 1.3rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;
