import { DefaultTheme } from "styled-components";

const COLORS = {
  green: "#414A3A",
  beige: "#F4EEEA",
  dark: "#0A0400",
  white: "#FFFFFF",
};

const MEDIA_QUERY_SIZES = {
  xs: "375px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1366px",
};

const createMediaQuery = (size: string) => `@media (min-width: ${size})`;

const AppTheme: DefaultTheme = {
  colors: {
    brand: {
      primary: COLORS.green,
    },
    interface: {
      beige: COLORS.beige,
      dark: COLORS.dark,
      white: COLORS.white,
    },
  },
  mediaQuery: {
    xs: createMediaQuery(MEDIA_QUERY_SIZES.xs),
    sm: createMediaQuery(MEDIA_QUERY_SIZES.sm),
    md: createMediaQuery(MEDIA_QUERY_SIZES.md),
    lg: createMediaQuery(MEDIA_QUERY_SIZES.lg),
    xl: createMediaQuery(MEDIA_QUERY_SIZES.xl),
  },
  container: {
    gap: "1rem",
    paddingHorisontal: "0 1rem",
    paddingVertical: "2rem 0",
    maxWidth: "75rem",
  },
};

export { AppTheme };
