import React, { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { debounce } from "../../../utils/helpers";
import { sendMessage } from "../../../store/auth";
import Description from "../../atoms/Description/Description";
import {
  FormContainer,
  StyledSpan,
  Form,
  Input,
  Button,
  TextArea,
} from "./ContactFormStyles";

const ContactForm = () => {
  const [characters, setCharacters] = useState(0);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user.authData);

  const {
    register: registerMessage,
    handleSubmit: handleRegisterMessage,
    // formState: { errors },
    reset: resetForm,
  } = useForm({
    defaultValues: {
      username: currentUser ? currentUser.name : null,
      email: currentUser ? currentUser.email : null,
      message: null,
    },
  });

  const handleSendMessage = useCallback(
    (data) => {
      dispatch(sendMessage(data));
      resetForm();
      setCharacters(0);
    },
    [dispatch, resetForm]
  );

  const debouncedHandleSendAMessage = useMemo(
    () => debounce((data) => handleSendMessage(data), 400),
    [handleSendMessage]
  );

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <FormContainer noMarginTop>
      <Description
        smallText
        text={"center"}
        padding={"1rem 0.5rem"}
        marginBottom={"0"}
        width={"250px"}
      >
        Didn't get a confirmation? Don't forget to check the SPAM folder.
      </Description>
      <Form onSubmit={handleRegisterMessage(debouncedHandleSendAMessage)}>
        <Input
          type="text"
          placeholder={"Username *"}
          {...registerMessage("username", {
            required: true,
            minLength: 3,
            maxLength: 30,
          })}
        />
        <Input
          type="text"
          placeholder={"Email *"}
          {...registerMessage("email", {
            required: true,
            minLength: 5,
            maxLength: 40,
            pattern: emailPattern,
          })}
        />
        <TextArea
          type="text"
          {...registerMessage("message", {
            required: true,
            minLength: 5,
            maxLength: 1200,
            onChange: (e) => setCharacters(e.target.value.trim().length),
          })}
        />
        <StyledSpan>{characters} / 1200</StyledSpan>
        <Button
          margin={"1rem 0"}
          type="submit"
          greyed={characters < 5}
          green
          color={"white"}
        >
          Send a message
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
