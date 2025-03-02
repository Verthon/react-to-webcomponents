// src/withStyles.tsx
import React, { ReactNode } from "react";
import { ThemeProvider, createGlobalStyle, StyleSheetManager } from "styled-components";

const defaultTheme = {
  primaryColor: "#007bff",
  backgroundColor: "#ffffff",
  textColor: "#333",
  fontFamily: "Arial, sans-serif",
};

interface WithStylesProps {
  theme?: typeof defaultTheme;
  iframeHead?: HTMLElement;
}

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily || "Arial, sans-serif"};
    background-color: ${({ theme }) => theme.backgroundColor || "#f8f8f8"};ł
    color: ${({ theme }) => theme.textColor || "#333"};
    margin: 0;
    padding: 0;
  }
`;


export function withStyles<ComponentType extends React.ComponentType<any>>(
  Component: ComponentType
) {
  return function StyledComponentWrapper(props: WithStylesProps) {
    const { theme = defaultTheme, iframeHead } = props;

    if (!iframeHead) {
      throw new Error("[withStyles] Missing iframeHead. Styling requires a valid <head> element.");
    }

    return (
      <StyleSheetManager target={iframeHead}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...props} />
        </ThemeProvider>
      </StyleSheetManager>
    );
  };
}
