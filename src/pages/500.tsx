import React from "react";
import { SEO } from "../components/SEO/SEO";
import { Layout } from "../layouts";
import { Hero } from "../components/Hero";
import { Title, StyledLink } from "../components/UI";
import { Container } from "../components/Grid";

type Props = {};

const InternalError = (props: Props) => {
  return (
    <Layout>
      <Hero flex="1">
        <Container justifyContent="center" alignItems="center">
          <Title fo color="white" level={1}>
            500
          </Title>
          <Title color="white" level={5}>
            Woops! Something went wrong :(
          </Title>
          <StyledLink color="currentColor" to="/">
            &lt; Back To Home
          </StyledLink>
        </Container>
      </Hero>
    </Layout>
  );
};

export default InternalError;

export const Head = () => <SEO title="Internal error" />;
