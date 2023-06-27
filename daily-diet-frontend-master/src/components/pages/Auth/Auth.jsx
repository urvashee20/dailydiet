import React, { useState, useEffect } from "react";
import Container from "../../templates/Container/Container";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AuthForm from "../../organisms/AuthForm/AuthForm";
import DoubleColumnArticle from "../../molecules/DoubleColumnArticle/DoubleColumnArticle";
import Gallery from "../../organisms/Gallery/Gallery";
import {
  ArticleImage,
  ImageContainer,
} from "../../../styles/globalComponentsStyles";
import granola from "../../../assets/Images/granola.jpg";
import chia from "../../../assets/Images/chia.jpg";
import cereal from "../../../assets/Images/cereal.jpg";
import SmallArticle from "../../molecules/SmallArticle/SmallArticle";

const Auth = () => {
  const [redirect, setRedirect] = useState(false);
  const { currentUser } = useSelector((state) => state.user.authData);

  useEffect(() => {
    if (currentUser) {
      setRedirect(true);
    }
  }, [currentUser]);

  return (
    <Container fillColor>
      {redirect && <Redirect to={"/"} />}
      <Gallery
        text={"center"}
        justify={"center"}
        padding={"4rem 4rem 8rem 4rem"}
        titlePrimary={"Good to see you"}
        children={
          <DoubleColumnArticle
            right={
              <SmallArticle
                height={"100%"}
                left={
                  <ImageContainer>
                    <ArticleImage
                      src={granola}
                      alt={"granola"}
                      justify={"center"}
                      width={"100%"}
                    />
                  </ImageContainer>
                }
                right={
                  <ImageContainer>
                    <ArticleImage
                      src={cereal}
                      alt={"cereal"}
                      justify={"center"}
                      width={"100%"}
                    />
                  </ImageContainer>
                }
                footer={
                  <ImageContainer>
                    <ArticleImage
                      src={chia}
                      alt={"chia"}
                      justify={"center"}
                      width={"100%"}
                    />
                  </ImageContainer>
                }
              />
            }
            left={<AuthForm />}
          />
        }
      />
    </Container>
  );
};

export default Auth;
