import React from "react";
import styled from "styled-components";

interface ButtonProps {
  color?: string;
  background?: string;
  $primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  padding: 0.25em 1em;
  margin: 0;
  cursor: pointer;
  border-radius: 0.5rem;
  background: transparent;
  color: ${({ color, theme }) => color || theme.colors.brand.primary};
  border: 2px solid ${({ color, theme }) => color || theme.colors.brand.primary};
  transition: all 0.25s ease;

  &:hover {
    background: ${({ color, theme }) => color || theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.interface.white};
  }
`;
