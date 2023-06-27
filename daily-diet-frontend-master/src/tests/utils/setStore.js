import { configureStore } from "@reduxjs/toolkit";
import reducer from "../../store/reducer";

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer,
    preloadedState,
  });
};
