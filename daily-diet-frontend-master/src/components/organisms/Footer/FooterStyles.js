import styled from "styled-components";

export const FooterContainer = styled.section`
  padding: 3rem 0 2rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  gap: 1rem;
  width: 100%;
  border-bottom: 1px solid #eaeaea;

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 2rem 0 0 0;
    margin: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    gap: 1rem 5rem;
    margin: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 2rem;
    align-items: baseline;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  padding: 2rem 3rem 3rem 3rem;
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 2rem 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    padding: 2rem 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;
