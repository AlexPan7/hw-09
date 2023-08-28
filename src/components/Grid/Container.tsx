import styled from "styled-components";

interface ContainerProps {
  padding?: string;
  maxWidth?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  padding: ${({ padding, theme }) =>
    padding || theme.container.paddingHorisontal};
  max-width: ${({ maxWidth, theme }) => maxWidth || theme.container.maxWidth};
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems || "flex—start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex—start"};
`;
