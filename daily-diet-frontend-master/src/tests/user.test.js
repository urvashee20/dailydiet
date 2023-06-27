import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/react/dont-cleanup-after-each";
import { screen, fireEvent, act, cleanup } from "@testing-library/react";
import { renderWithProviders } from "./utils/renderWithProviders";
import { signup, updateUserData } from "../store/auth";
import App from "../App";

jest.mock("../../node_modules/react-alice-carousel", () => ({
  __esModule: true,
  default: () => <div>Sign Up</div>,
}));

describe("Register / login / change user data / logout", () => {
  let store;

  beforeAll(async () => {
    const { storage } = renderWithProviders(<App />);
    store = storage;
  });

  afterAll(() => {
    cleanup();
  });

  const getCurrentUser = () => store.getState().user.authData.currentUser;

  test("New user registration should be possible", async () => {
    expect(screen.queryAllByText("Sign In / Register")[0]).toBeInTheDocument();
    fireEvent.click(screen.queryAllByText("Sign In / Register")[0]);
    expect(screen.queryByText("Good to see you")).toBeInTheDocument();

    await act(async () => {
      await store.dispatch(
        signup({
          username: "testuser",
          password: "testuser",
          email: "testuser@gmail.com",
        })
      );
    });

    expect(getCurrentUser().name).toEqual("testuser");
    expect(screen.queryAllByText("Subscribe")[0]).toBeInTheDocument();
  });

  test("New user should be able to visit the Inspirations section which is available only for logged users", async () => {
    fireEvent.click(screen.queryAllByText("Inspirations")[0]);
    expect(screen.queryByText("Food Diaries")).toBeInTheDocument();
  });

  test("Change user preferences should be possible", async () => {
    fireEvent.click(screen.queryAllByText("Profile")[0]);
    expect(screen.queryByText("Hello, testuser")).toBeInTheDocument();
    fireEvent.click(screen.queryByText("Account"));
    expect(screen.queryByText("Save")).toBeInTheDocument();

    await act(async () => {
      await store.dispatch(
        updateUserData({
          id: "testuserID",
          userData: {
            username: "testuseredited",
            password: "testuseredited",
            email: "testuseredited@gmail.com",
          },
        })
      );
    });

    expect(getCurrentUser().name).toEqual("testuseredited");
  });

  test("User should be able to logout and be redirected to the main page", async () => {
    fireEvent.click(screen.queryAllByText("Inspirations")[0]);
    expect(screen.queryByText("Food Diaries")).toBeInTheDocument();
    fireEvent.click(screen.queryAllByText("Logout")[0]);
    expect(getCurrentUser()).toBeNull();
    expect(screen.queryAllByText("Sign In / Register")[0]).toBeInTheDocument();
  });
});
