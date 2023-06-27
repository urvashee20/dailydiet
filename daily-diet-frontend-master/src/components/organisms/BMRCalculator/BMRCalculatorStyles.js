import styled from "styled-components";

export const Form = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 3.5rem 0;
  padding: 1rem;
`;

export const Input = styled.input`
  width: ${({ text }) => (text ? "200px" : "120px")};
  margin: 0.5rem 0;
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;
`;

export const StyledSpan = styled.span`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  padding: 0.6rem;
  display: block;
  color: white;
  border: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 10px;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: fit-content;
    margin-top: 0rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: fit-content;
  }
`;

export const Select = styled.select`
  width: ${({ text }) => (text ? "200px" : "120px")};
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;
`;

export const Button = styled.button`
  width: ${({ text }) => (text ? "200px" : "120px")};
  margin: 0.5rem 0 1rem 0;
  font-size: 0.8rem;
  padding: 0.6rem;
  display: block;
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 10px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.03);
  }
`;

export const FormContainer = styled.div`
  min-width: ${({ alternateView }) => (alternateView ? "100%" : "300px")};
  letter-spacing: 0.5px;
  border-radius: 25px;
  width: ${({ alternateView }) => (alternateView ? "fit-content" : "100%")};
  height: 100%;
  z-index: 2;
  margin-top: ${({ noMarginTop }) => (noMarginTop ? "0" : "2rem")};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "0")};
  background: ${({ alternateView }) => (alternateView ? "white" : "")};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: ${({ alternateView }) => (alternateView ? "1px solid #eaeaea" : "")};
  -webkit-box-shadow: ${({ alternateView }) =>
    alternateView ? "0 5px 15px -10px rgba(0, 0, 0, 0.3)" : ""};
  -moz-box-shadow: ${({ alternateView }) =>
    alternateView ? "0 5px 15px -10px rgba(0, 0, 0, 0.3)" : ""};
  box-shadow: ${({ alternateView }) =>
    alternateView ? "0 5px 15px -10px rgba(0, 0, 0, 0.3)" : ""};

  @media ${({ theme }) => theme.breakpoints.md} {
    width: ${({ alternateView }) => (alternateView ? "fit-content" : "100%")};
    padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    min-width: 280px;
  }
`;
