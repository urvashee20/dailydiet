import { Wrapper, InnerContainer, Container } from "./ArticleStyles";

const Article = ({
  id,
  padding,
  backgroundLeft,
  backgroundRight,
  left,
  right,
  children,
  alignSelfRightColumn,
  alignSelfLeftColumn,
  minHeight,
  equalColumns,
  innerPadding,
}) => {
  return (
    <Container padding={padding}>
      <Wrapper id={id} minHeight={minHeight}>
        <InnerContainer
          innerPadding={innerPadding}
          equalColumns={equalColumns}
          backgroundLeft={backgroundLeft}
          alignSelfLeftColumn={alignSelfLeftColumn}
        >
          {left}
        </InnerContainer>
        <InnerContainer
          innerPadding={innerPadding}
          equalColumns={equalColumns}
          backgroundRight={backgroundRight}
          alignSelfRightColumn={alignSelfRightColumn}
        >
          {right}
        </InnerContainer>
      </Wrapper>
      {children}
    </Container>
  );
};
export default Article;
