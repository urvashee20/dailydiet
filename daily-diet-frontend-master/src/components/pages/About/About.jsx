import React from "react";
import Article from "../../organisms/Article/Article";
import TextField from "../../molecules/TextField/TextField";
import Container from "../../templates/Container/Container";
import FeatureArticle from "../../organisms/FeatureArticle/FeatureArticle";
import Carousel from "../../organisms/Carousel/Carousel";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import Image from "../../atoms/Image/Image";
import breakfast from "../../../assets/Images/breakfast.jpg";
import { useSelector } from "react-redux";
import Attributes from "../../molecules/Attributes/Attributes";
import { features } from "../../../data/constants";
import { aboutSummary } from "../../../data/constants";
import Item from "../../molecules/Item/Item";
import Items from "../../molecules/Items/Items";
import { about } from "../../../data/constants";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import herbs from "../../../assets/Images/herbs.jpg";
import {
  ArticleImage,
  ContactInnerContainer,
  ResponsiveContainer,
} from "../../../styles/globalComponentsStyles";
import Gallery from "../../organisms/Gallery/Gallery";
import ContactForm from "../../organisms/ContactForm/ContactForm";

const About = () => {
  const { currentUser } = useSelector((state) => state.user.authData);

  const renderLink = () => {
    if (!currentUser) return "/auth#top";
    if (!currentUser.profile.bmr) return "/#calculator";
    return "/builder#top";
  };

  return (
    <Container fillColor>
      <>
        <Carousel
          mouseTracking
          items={features.map((feature) => (
            <FeatureArticle
              {...feature}
              titlePrimary={feature.titlePrimary}
              titleSecondary={feature.titleSecondary}
              descriptionPrimary={feature.descriptionPrimary}
              descriptionSecondary={feature.descriptionSecondary}
              alt={feature.alt}
            />
          ))}
        />
        <ControlPanel padding={"0 1rem"} mobileMargin={"2rem 0"}>
          <Items margin={"4rem 4rem 2rem 4rem"}>
            {about.map(({ primary, secondary, id }) => (
              <Item
                primary={primary}
                secondary={secondary}
                key={id}
                margin={"3rem 1rem 3rem 1rem"}
              />
            ))}
          </Items>
        </ControlPanel>
        <Article
          padding={"2rem 4rem 1rem 4rem"}
          right={
            <Image
              right
              justify={"end"}
              alt={"breakfast on the table"}
              src={breakfast}
              primary={"Delicious\nBreakfast"}
              secondary={"For Two"}
            />
          }
          left={
            <>
              <TextField
                titlePrimary={"Let's start"}
                titleSecondary={"It's easy"}
                description={
                  "Registered users can create their own products, meals and diet diaries that they can use in building their diet. Once created, the author can edit or delete them.\n\nThe huge product base is constantly expanded with new products, including user-created products.\n\nDiaries can be anonymously rated by users.\n\nUseful tips are available to everyone, highlighting important dietary aspects.\n\nThings created by other users can also be an inspiration."
                }
              />
              <Attributes items={aboutSummary} />
            </>
          }
        />
        <ControlPanel padding={"0 1rem"} margin={"0 4rem"}>
          <Attributes smallScreen items={aboutSummary} />
        </ControlPanel>
        <ControlPanel padding={"0 1rem"} mobileMargin={"2rem 0"}>
          <Items margin={"4rem 3rem 2rem 3rem"}>
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
          </Items>
        </ControlPanel>
        <Gallery
          text={"center"}
          justify={"center"}
          padding={"4rem"}
          titlePrimary={"We look forward to your feedback"}
          children={
            <ResponsiveContainer>
              <ContactForm />
              <ContactInnerContainer>
                <ArticleImage
                  src={herbs}
                  alt={"herbs"}
                  justify={"center"}
                  width={"100%"}
                />
              </ContactInnerContainer>
            </ResponsiveContainer>
          }
        />
      </>
    </Container>
  );
};

export default About;
