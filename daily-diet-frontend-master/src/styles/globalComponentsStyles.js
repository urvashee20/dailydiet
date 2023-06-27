import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0.5rem 0.5rem 0.5rem 0;
`;

export const StyledLabel = styled.label`
  margin: 0 0.5rem 0 0.5rem;
`;

export const StyledSelect = styled.select`
  height: ${({ height }) => (height ? `${height}` : "fit-content")};
  width: ${({ width }) => (width ? `${width}` : "fit-content")};
  display: ${({ block }) => (block ? "block" : "")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
  font-size: 0.8rem;
  padding: ${({ padding }) => (padding ? `${padding}` : "0.5rem")};
  text-align: center;
  align-self: ${({ align }) => (align ? `${align}` : "initial")};
  color: ${({ color }) => (color ? `${color}` : "white")};
  border: ${({ border }) => (border ? `${border}` : "none")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : "10px"};
  cursor: pointer;
  background-color: ${({ remove, add, save, edit, theme }) => {
    if (remove) return `${theme.colors.warning}`;
    if (add) return `${theme.colors.green}`;
    if (save) return `${theme.colors.yellow};`;
    if (edit) return `${theme.colors.lightBlue};`;
    else return `transparent`;
  }};

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.03);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: ${({ width }) => (width ? `${width}` : "80%")};
  }
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledListItem = styled.li`
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  border-top: ${({ border }) => (border ? "1px solid #eaeaea" : "")};
`;

export const StyledTitle = styled.span`
  margin: 0.5rem 0;
  font-weight: bold;
  color: green;
  display: flex;
  font-size: ${({ main }) => (main ? "1.3rem" : "1rem")};
`;

export const ProgressBarsContainer = styled.ul`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledOption = styled.option`
  border: none;
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;

export const ImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: baseline;
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ContactInnerContainer = styled.div`
  overflow: hidden;
`;
