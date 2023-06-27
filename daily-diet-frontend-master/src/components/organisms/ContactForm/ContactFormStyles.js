import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: white;
  letter-spacing: 0.5px;
  border-radius: 25px;
  z-index: 2;
  margin-top: ${({ noMarginTop }) => (noMarginTop ? "0" : "2rem")};
  padding: 1rem;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1rem;
    margin-top: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
    margin-top: 0;
  }
`;

export const Form = styled.form`
  margin-top: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 0.8rem;
  padding: 0.8rem 0.6rem;
  margin: ${({ margin }) => (margin ? margin : "0.5rem 0")};
  border-radius: 10px;
  text-align: center;
  border: none;
  background-color: ${({ green, red, theme }) => {
    if (green) return `${theme.colors.green}`;
    if (red) return `${theme.colors.warning}`;
    else return `transparent`;
  }};
  color: ${({ color }) => (color ? `${color}` : "black")};
  opacity: ${({ greyed }) => (greyed ? "50%" : "100%")};
  cursor: pointer;
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

export const TextArea = styled.textarea`
  width: 100%;

  min-height: 100px;
  max-height: 100px;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid lightgray;
  border-radius: 10px;

  @media ${({ theme }) => theme.breakpoints.md} {
    min-height: 200px;
    max-height: 200px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    min-height: 350px;
    max-height: 350px;
  }
`;
