import React from "react";
import "@testing-library/jest-dom";
import { screen, fireEvent, act, cleanup } from "@testing-library/react";
import { renderWithProviders } from "./utils/renderWithProviders";
import { signup } from "../store/auth";
import { createProduct } from "../store/products";
import { createMeal } from "../store/meals";
import { createDiary, updateDiary, deleteDiary } from "../store/diaries";
import { testDiary, testMeal, testProduct } from "./mocks/items";
import App from "../App";

jest.mock("../../node_modules/apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

jest.mock("../../node_modules/react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

jest.mock("../../node_modules/react-alice-carousel", () => ({
  __esModule: true,
  default: () => <div>Assistant</div>,
}));

window.HTMLElement.prototype.scrollIntoView = function () {};

describe("Create products, meals and diaries", () => {
  let store;

  beforeAll(async () => {
    const { storage } = renderWithProviders(<App />);
    store = storage;

    await act(async () => {
      await store.dispatch(
        signup({
          username: "testuser",
          password: "testuser",
          email: "testuser@gmail.com",
        })
      );
    });
  });

  afterAll(() => {
    cleanup();
  });

  const getProducts = () => store.getState().resources.products.products;
  const getMeals = () => store.getState().resources.meals.meals;
  const getDiaries = () => store.getState().resources.diaries.diaries;

  test("Logged user should be able to create new product", async () => {
    expect(getProducts()).toHaveLength(0);
    fireEvent.click(screen.queryAllByText("Profile")[0]);
    fireEvent.click(screen.queryByText("Product"));
    expect(screen.queryByText("Create")).toBeInTheDocument();

    await act(async () => {
      await store.dispatch(createProduct(testProduct));
    });

    expect(getProducts()).toHaveLength(1);
  });

  test("Creating new meal should be possible", async () => {
    expect(getMeals()).toHaveLength(0);

    await act(async () => {
      await store.dispatch(createMeal(testMeal));
    });

    expect(getMeals()).toHaveLength(1);
  });

  test("Should allow the user to create diaries", async () => {
    expect(getDiaries()).toHaveLength(0);

    await act(async () => {
      await store.dispatch(createDiary(testDiary));
    });

    expect(getDiaries()).toHaveLength(1);
  });

  test("User should be able to update it's diary", async () => {
    expect(getDiaries()[0].title).toEqual("testdiary");

    await act(async () => {
      await store.dispatch(
        updateDiary({
          id: "testdiaryID",
          diary: {
            ...testDiary,
            title: "testdiaryupdated",
          },
        })
      );
    });

    expect(getDiaries()[0].title).toEqual("testdiaryupdated");
  });

  test("User should be able to delete updated diary", async () => {
    expect(getDiaries()).toHaveLength(1);

    await act(async () => {
      await store.dispatch(deleteDiary("testdiaryID"));
    });

    expect(getDiaries()).toHaveLength(0);
  });
});
