import { BiShow, BiHide } from "react-icons/bi";
import { Wrapper, StyledSpan } from "./VisibilityIconStyles";

const VisibilityIcon = ({ condition, toggler }) => {
  return (
    <Wrapper onClick={toggler}>
      <StyledSpan>Password visibility</StyledSpan>
      {condition ? <BiHide /> : <BiShow />}
    </Wrapper>
  );
};
export default VisibilityIcon;
