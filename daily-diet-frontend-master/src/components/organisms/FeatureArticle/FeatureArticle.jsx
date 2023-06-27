import {
  Wrapper,
  InnerWrapper,
  Container,
  Actions,
} from "./FeatureArticleStyles";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import Title from "../../atoms/Title/Title";
import Description from "../../atoms/Description/Description";
import { VanishingContent } from "../../molecules/VanishingContent/VanishingContent";
import Image from "../../atoms/Image/Image";
import { useSelector } from "react-redux";

const FeatureArticle = ({
  titleSecondary,
  titlePrimary,
  descriptionPrimary,
  descriptionSecondary,
  link,
  altLink,
  image,
  alt,
  buttonImage,
}) => {
  const { currentUser } = useSelector((state) => state.user.authData);

  const renderLink = () => {
    if (!currentUser) return altLink;
    if (!currentUser.profile.bmr) return "/#calculator";
    return link;
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Container>
          <Title titlePrimary={titlePrimary} titleSecondary={titleSecondary} />
          <Description marginBottom={"0"}>{descriptionPrimary}</Description>
          <VanishingContent padding={"0"} justify={"left"}>
            <Description>{descriptionSecondary}</Description>
            <Actions>
              <LinkItem
                hash={1}
                add={1}
                color={"white"}
                padding={"0.8rem"}
                margin={"0.5rem 0"}
                radius={"10px"}
                to={renderLink()}
                children={"Get started"}
                size={"0.8rem"}
              />
            </Actions>
            <Image alt={"leaves"} src={buttonImage} width={"25%"} />
          </VanishingContent>
        </Container>
        <Container>
          <Image alt={alt} src={image} width={"100%"} />
        </Container>
      </InnerWrapper>
      <VanishingContent padding={"0 1rem"} margin={"0 0 1.5rem 0"} smallScreen>
        <Description>{descriptionSecondary}</Description>
        <Actions>
          <LinkItem
            hash={1}
            add={1}
            color={"white"}
            padding={"0.8rem"}
            margin={"0.5rem 0"}
            radius={"10px"}
            to={renderLink()}
            children={"Get started"}
            size={"0.8rem"}
          />
        </Actions>
      </VanishingContent>
    </Wrapper>
  );
};
export default FeatureArticle;
