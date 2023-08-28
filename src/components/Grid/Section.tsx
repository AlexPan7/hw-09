import styled from "styled-components";

interface ContainerProps {
  padding?: string;
}

export const Section = styled.section<ContainerProps>`
  padding: ${({ padding, theme }) =>
    padding || theme.container.paddingVertical};
`;
