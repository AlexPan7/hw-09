import styled from "styled-components";

interface ColumnProps {
  margin?: string;
  padding?: string;
  width?: number;
  alignItems?: string;
  justifyContent?: string;
}

export const Column = styled.div<ColumnProps>`
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  grid-column: auto/span ${({ width }) => width || 0};
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems || "flex—start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex—start"};
`;
