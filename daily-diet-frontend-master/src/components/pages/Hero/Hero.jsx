import React from "react";
import { useSelector } from "react-redux";
import Container from "../../templates/Container/Container";
import Article from "../../organisms/Article/Article";
import Image from "../../atoms/Image/Image";
import TextField from "../../molecules/TextField/TextField";
import hero from "../../../assets/Images/hero.jpeg";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import { Actions } from "../../organisms/FeatureArticle/FeatureArticleStyles";
import Item from "../../molecules/Item/Item";
import { statistics } from "../../../data/constants";
import Items from "../../molecules/Items/Items";

const Hero = () => {
  const { currentUser } = useSelector((state) => state.user.authData);

  const renderLink = () => {
    if (!currentUser) return "/auth#top";
    if (!currentUser.profile.bmr) return "/#calculator";
    return "/builder#top";
  };

  return (
    <Container fillColor>
      <Article
        minHeight={"60vh"}
        padding={"5rem 4rem 3rem 4rem"}
        equalColumns
        right={
          <Image
            right
            justify={"end"}
            alt={"Fruit and pancake on a white background"}
            src={hero}
          />
        }
        left={
          <TextField
            titlePrimary={"Your daily assistant"}
            titleSecondary={
              "A step-by-step guide through the process of creating your diet"
            }
            description={
              "Our team has developed a simple and easy to use diet diary builder. It is powered by a constantly expanding range of new and proven products."
            }
          >
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
          </TextField>
        }
      />
      {/* <Items margin={"2rem 4rem"} justify={"left"}>
        {statistics.map(({ primary, secondary, id }) => (
          <Item
            primary={primary}
            secondary={secondary}
            key={id}
            margin={"3rem 1rem 5rem 1rem"}
          />
        ))}
      </Items> */}
    </Container>
  );
};

export default Hero;
