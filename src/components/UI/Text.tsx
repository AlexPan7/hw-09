import React from "react";
import styled from "styled-components";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface TextProps {
  color?: string;
  margin?: string;
  transform?: string;
}

export const Text = styled.p<TextProps>`
  color: ${({ color, theme }) => color || theme.colors.interface.dark};
  margin: ${({ margin }) => margin || "0"};
  transform: ${({ transform }) => transform || "none"};
`;
