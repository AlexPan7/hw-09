import React from "react";
import styled from "styled-components";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps {
  level: HeadingLevel;
  className?: string;
  color?: string;
  margin?: string;
}

const fontSizes = [
  "2rem",
  "1.75rem",
  "1.5rem",
  "1.25rem",
  "1.15rem",
  "1rem",
  "0.85rem",
];

const StyledTitle = styled.h1<TitleProps>`
  font-weight: var(--body-font-weight);
  font-family: var(--heading-font-family);
  line-height: 1.5;
  font-size: ${({ level }) => fontSizes[level - 1]};
  margin: ${({ margin }) => margin || "0"};
  color: ${({ color, theme }) => color || theme.colors.brand.primary};
  ${({ theme }) => theme.mediaQuery.md} {
    font-size: ${({ level }) => parseFloat(fontSizes[level - 1]) * 1.2 + "rem"};
  }
`;

export const Title = ({ level, ...otherProps }: TitleProps) => (
  <StyledTitle as={`h${level}`} level={level} {...otherProps} />
);
