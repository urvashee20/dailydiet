import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./setStore";

export const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    storage = setupStore(preloadedState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={storage}>
        <GoogleOAuthProvider
          clientId={
            "546341062149-qn4vdlsiqchh7sav2tcim70frqhc62er.apps.googleusercontent.com"
          }
        >
          <BrowserRouter>{children}</BrowserRouter>
        </GoogleOAuthProvider>
      </Provider>
    );
  };

  return { storage, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
