import { Left, Right, Wrapper } from "./DoubleColumnArticleStyles";

const DoubleColumnArticle = ({ left, right }) => {
  return (
    <Wrapper>
      <Left>{left}</Left>
      <Right>{right}</Right>
    </Wrapper>
  );
};
export default DoubleColumnArticle;
