import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/shared/global";
import { ThemeProvider } from "styled-components";
import theme from "../src/shared/theme";

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
};
