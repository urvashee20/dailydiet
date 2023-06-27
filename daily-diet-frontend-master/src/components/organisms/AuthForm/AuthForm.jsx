import { useState, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "@react-oauth/google";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch } from "react-redux";
import { notify } from "../../../store/utils";
import { debounce } from "../../../utils/helpers";
import {
  externalSignin,
  signin,
  signup,
  resetPassword,
  signupdemo,
} from "../../../store/auth";
import VisibilityIcon from "../../atoms/VisibilityIcon/VisibilityIcon";
import Description from "../../atoms/Description/Description";
import { RiLock2Line } from "react-icons/ri";
import {
  Form,
  Button,
  FormContainer,
  Input,
  StyledSpan,
} from "./AuthFormStyles";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const status = useSelector((state) => state.user.authData.status);
  const dispatch = useDispatch();

  const {
    register: registerSignUp,
    handleSubmit: handleRegisterSignUp,
    reset: resetSignUp,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      username: null,
      password: null,
      confirmpassword: null,
      email: null,
    },
  });

  const {
    register: registerSignIn,
    handleSubmit: handleRegisterSignIn,
    reset: resetSignIn,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      password: null,
      email: null,
    },
  });

  const {
    register: registerResetPassword,
    handleSubmit: handleRegisterResetPassword,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      email: null,
    },
  });

  const handleSignIn = useCallback(
    (data) => {
      dispatch(signin(data));
      resetSignIn();
    },
    [dispatch, resetSignIn]
  );

  const debouncedHandleSignIn = useMemo(
    () => debounce((data) => handleSignIn(data), 400),
    [handleSignIn]
  );

  const handleResetPassword = useCallback(
    (data) => {
      dispatch(resetPassword(data));
    },
    [dispatch]
  );

  const debouncedHandleResetPassword = useMemo(
    () => debounce((data) => handleResetPassword(data), 400),
    [handleResetPassword]
  );

  const handleSignUp = useCallback(
    (data) => {
      if (data.password === data.confirmpassword) {
        dispatch(signup(data));
        resetSignUp();
      } else notify("Password fields must have the same value");
    },
    [dispatch, resetSignUp]
  );

  const debouncedHandleSignUp = useMemo(
    () => debounce((data) => handleSignUp(data), 400),
    [handleSignUp]
  );

  const googleSuccess = async (credentialResponse) => {
    const response = await credentialResponse;

    try {
      dispatch(externalSignin(response));
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    notify("Login failed. Try again.");
  };

  return (
    <>
      {isPasswordReset ? (
        <FormContainer>
          <RiLock2Line size={"2rem"} />
          <StyledSpan>Reset password</StyledSpan>
          <Description
            smallText
            text={"center"}
            padding={"1rem"}
            width={"240px"}
            marginBottom={"0"}
          >
            If you have lost your password, we'll email you a link to reset it.{" "}
            <br /> <br />
            Didn't get an email? Don't forget to check the SPAM folder.
          </Description>
          <Form
            onSubmit={handleRegisterResetPassword(debouncedHandleResetPassword)}
          >
            <Input
              type="text"
              placeholder={"Email address *"}
              {...registerResetPassword("email", {
                required: true,
                minLength: 5,
                maxLength: 40,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <Button margin={"0 0 1rem 0"} type="submit" red color={"white"}>
              Reset password
            </Button>
            <StyledSpan
              pointer
              margin={"1rem 0 0 0"}
              onClick={() => {
                setIsPasswordReset(false);
              }}
            >
              Go back
            </StyledSpan>
          </Form>
        </FormContainer>
      ) : (
        <>
          <ClipLoader loading={status === "loading"} size={150} />
          {status !== "loading" && (
            <FormContainer>
              <RiLock2Line size={"2rem"} />
              <StyledSpan>{isSignUp ? "Sign Up" : "Sign In"}</StyledSpan>
              <Form
                onSubmit={
                  isSignUp
                    ? handleRegisterSignUp(debouncedHandleSignUp)
                    : handleRegisterSignIn(debouncedHandleSignIn)
                }
              >
                {isSignUp ? (
                  <>
                    <Input
                      type="text"
                      placeholder={"User Name *"}
                      {...registerSignUp("username", {
                        required: true,
                        minLength: 3,
                        maxLength: 30,
                      })}
                    />
                    <Input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder={"Password *"}
                      {...registerSignUp("password", {
                        required: true,
                        minLength: 8,
                        maxLength: 25,
                      })}
                    />
                    <Input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder={"Confirm password *"}
                      {...registerSignUp("confirmpassword", {
                        required: true,
                        minLength: 8,
                        maxLength: 25,
                      })}
                    />
                    <VisibilityIcon
                      condition={isPasswordVisible}
                      toggler={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                    <Input
                      type="text"
                      placeholder={"Email address *"}
                      {...registerSignUp("email", {
                        required: true,
                        minLength: 5,
                        maxLength: 40,
                        pattern:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                  </>
                ) : (
                  <>
                    <Input
                      type="text"
                      placeholder={"Email address *"}
                      {...registerSignIn("email", {
                        required: true,
                        minLength: 5,
                        maxLength: 40,
                        pattern:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    <Input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder={"Password *"}
                      {...registerSignIn("password", {
                        required: true,
                        minLength: 8,
                        maxLength: 25,
                      })}
                    />
                    <VisibilityIcon
                      condition={isPasswordVisible}
                      toggler={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  </>
                )}
                <Button
                  type="submit"
                  margin={isSignUp ? "0.5rem 0 0 0" : "0.5rem 0 0.5rem 0"}
                  green
                  color={"white"}
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </Button>
                {!isSignUp && (
                  <Button
                    margin={"0 0 1rem 0"}
                    type="button"
                    red
                    color={"white"}
                    onClick={() => {
                      setIsPasswordReset(true);
                    }}
                  >
                    Forgot password ?
                  </Button>
                )}
                <Button
                  onClick={() => dispatch(signupdemo())}
                  type="button"
                  margin={isSignUp ? "0.5rem 0 0 0" : "0.5rem 0 0.5rem 0"}
                  yellow
                >
                  DEMO
                </Button>
                {!isSignUp && (
                  <GoogleLogin
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    width={"240px"}
                  />
                )}
                <StyledSpan
                  pointer
                  margin={"1rem 0 0 0"}
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up "}
                </StyledSpan>
              </Form>
            </FormContainer>
          )}
        </>
      )}
    </>
  );
};
export default AuthForm;
