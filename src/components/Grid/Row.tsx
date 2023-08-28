import styled from "styled-components";

interface RowProps {
  margin?: string;
  gap?: string;
}

export const Row = styled.div<RowProps>`
  margin: ${({ margin }) => margin || ""};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ gap, theme }) => gap || theme.container.gap};
`;
