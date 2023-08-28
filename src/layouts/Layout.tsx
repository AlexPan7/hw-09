import React from "react";
import { ThemeProvider } from "styled-components";
import { AppTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/GlobalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};
