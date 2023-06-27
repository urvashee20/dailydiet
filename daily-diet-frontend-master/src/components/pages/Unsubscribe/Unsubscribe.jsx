import React, { useEffect } from "react";
import Container from "../../templates/Container/Container";
import Gallery from "../../organisms/Gallery/Gallery";
import { fakeUserNewsletterUnsubscribe } from "../../../store/auth";
import { useDispatch } from "react-redux";
import { debounce } from "../../../utils/helpers";

const Unsubscribe = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location;
    const token = url.hash.split("#access_token=")[1];

    debounce(
      dispatch(fakeUserNewsletterUnsubscribe({ token, status: false })),
      400
    );
  }, [dispatch]);

  return (
    <Container fillColor>
      <Gallery
        text={"center"}
        justify={"center"}
        padding={"5rem 3rem"}
        titlePrimary={"You have been"}
        titleSecondary={"Unsubscribed"}
        children={<p>From our newsletter</p>}
      />
    </Container>
  );
};

export default Unsubscribe;
