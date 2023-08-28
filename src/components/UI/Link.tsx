import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

interface LinkProps {
  color?: string;
}

export const StyledLink = styled(GatsbyLink)<LinkProps>`
  color: ${({ color, theme }) => color || theme.colors.brand.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
