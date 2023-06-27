import styled from "styled-components";

export const Form = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: 250px;
`;

export const Input = styled.input`
  width: 120px;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;
`;

export const Button = styled.button`
  width: 120px;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  padding: 0.5rem;
  display: block;
  color: white;
  border: none;
  background-color: ${({ warning, theme }) =>
    warning ? theme.colors.warning : theme.colors.green};
  border-radius: 10px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.03);
  }
`;

export const FormContainer = styled.div`
  background-color: white;
  min-width: 250px;
  letter-spacing: 0.5px;
  border-radius: 25px;
  z-index: 2;
  padding: 1rem;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    min-width: 280px;
  }
`;
