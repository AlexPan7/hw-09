import React from "react";
import styled from "styled-components";
import { Text } from "../UI";
import { Container } from "../Grid";

interface FooterProps {
  logoSrc: string;
}

const FooterContainer = styled.footer<FooterProps>`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: white;
  border-top: 2px solid ${({ theme }) => theme.colors.interface.beige};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container alignItems="center" justifyContent="center">
        <Text color="white">
          ©{currentYear} Lowe's. LOWE'S, the Gable Mansard Design and Lowe's Pro
          Supply are trademarks or registered trademarks of LF, LLC.
        </Text>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
