import { Container, Footer, Left, Right, Wrapper } from "./SmallArticleStyles";

const SmallArticle = ({ left, right, footer, height }) => {
  return (
    <Wrapper height={height}>
      <Container>
        <Left>{left}</Left>
        <Right>{right}</Right>
      </Container>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};
export default SmallArticle;
