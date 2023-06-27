import styled from "styled-components";

export const Input = styled.input`
  width: 240px;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;
`;

export const StyledSpan = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  margin: ${({ margin }) => (margin ? margin : 0)};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 240px;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: ${({ margin }) => (margin ? margin : "0.5rem 0")};
  border-radius: 10px;
  text-align: center;
  border: none;
  background-color: ${({ green, red, yellow, theme }) => {
    if (green) return `${theme.colors.green}`;
    if (red) return `${theme.colors.warning}`;
    if (yellow) return `${theme.colors.yellow}`;
    else return `transparent`;
  }};
  color: ${({ color }) => (color ? `${color}` : "black")};
  cursor: pointer;
`;

export const FormContainer = styled.div`
  background-color: white;
  min-width: 300px;
  letter-spacing: 0.5px;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  z-index: 2;
  padding: 1rem;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    min-width: 280px;
  }
`;
