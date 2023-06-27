import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/react/dont-cleanup-after-each";
import { screen, fireEvent, act, cleanup } from "@testing-library/react";
import { renderWithProviders } from "./utils/renderWithProviders";
import { signin, updateProfile } from "../store/auth";
import { profile } from "./mocks/user";
import App from "../App";

describe("Update user profile", () => {
  let store;

  beforeAll(async () => {
    const { storage } = renderWithProviders(<App />);
    store = storage;

    await act(async () => {
      await store.dispatch(
        signin({
          password: "testuser",
          email: "testuser@gmail.com",
        })
      );
    });
  });

  afterAll(() => {
    cleanup();
  });

  const getCurrentUserProfile = () =>
    store.getState().user.authData.currentUser.profile;

  test("Logged user should NOT be able to use the diary creator without it's user profile completed", async () => {
    expect(getCurrentUserProfile().bmr).toEqual(0);
    expect(getCurrentUserProfile().tdee).toEqual(0);
    expect(getCurrentUserProfile().demandAmount).toEqual({
      kcal: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    });

    fireEvent.click(screen.queryAllByText("Creator")[0]);
    expect(screen.queryByText("Get BMR & TDEE")).toBeInTheDocument();
  });

  test("The user should be able to complete it's profile", async () => {
    await act(async () => {
      await store.dispatch(updateProfile({ id: "testuserID", profile }));
    });

    expect(getCurrentUserProfile().bmr).toEqual(1690);
    expect(getCurrentUserProfile().tdee).toEqual(2619);
    expect(getCurrentUserProfile().demandAmount).toEqual({
      kcal: 2619,
      protein: 131,
      carbs: 327,
      fat: 87,
    });
  });

  test("Should allow the user with it's profile completed to use the diary creator", async () => {
    fireEvent.click(screen.queryByText("Add product"));
    expect(
      screen.queryByPlaceholderText("Start typing...")
    ).toBeInTheDocument();
  });
});
