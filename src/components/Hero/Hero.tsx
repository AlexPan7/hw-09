import React from "react";
import styled from "styled-components";
import { Container } from "../Grid";
import { Title } from "../UI";

interface HeroProps {
  backgroundСolor: string;
  flex: number;
}

export const Hero = styled.div<HeroProps>`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.interface.white};
  flex: ${({ flex }) => flex || 0};
`;
