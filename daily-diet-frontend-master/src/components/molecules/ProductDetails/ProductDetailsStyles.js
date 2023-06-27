import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 1rem 0;
    max-width: 350px;
  }
`;

export const StyledImage = styled.img`
  width: 160px;
  border-radius: 50%;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 2;
`;

export const Header = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;
  text-align: left;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 0.8rem 0;
  white-space: pre-line;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
`;

export const Span = styled.span`
  white-space: pre-line;
  text-align: left;
  font-weight: normal;
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  margin-top: -30%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 25px;
  padding: 100px 1.5rem 1.5rem 1.5rem;
  z-index: 0;
  width: 250px;
  height: 320px;

  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
