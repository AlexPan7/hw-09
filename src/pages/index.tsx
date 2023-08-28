import React from "react";
import { SEO } from "../components/SEO/SEO";
import { Layout } from "../layouts";
import { Container, Row, Column, Section } from "../components/Grid";
import { Title, Text, Button, StyledLink } from "../components/UI";
import { Hero } from "../components/Hero";

type Props = {};

const index = (props: Props) => {
  const primary = true; // Define the 'primary' variable
  return (
    <Layout>
      <Hero>
        <Container>
          <Title color="white" level={1}>
            Home Page
          </Title>
        </Container>
      </Hero>
      <Section>
        <Container>
          <Title margin="0 0 20px" level={1}>
            Home
          </Title>
          <Text margin="0 0 20px">545445</Text>
          <Row margin="0 0 20px">
            <Column width={2}>
              <Button>Button</Button>
            </Column>
            <Column width={4} alignItems="center" justifyContent="center">
              <Button color="#BF4F74">Button</Button>
            </Column>
          </Row>
          <Title margin="0 0 20px" level={2}>
            Some text
          </Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            neque, quis iste libero facere quae harum temporibus et? Doloremque
            obcaecati, repellat aperiam sed assumenda quasi temporibus doloribus
            voluptas dignissimos quam!{" "}
            <StyledLink target="_blank" to="https://www.google.com">
              Google
            </StyledLink>
          </Text>
        </Container>
      </Section>
    </Layout>
  );
};

export default index;

export const Head = () => <SEO title="Home Page" description="my-blog site" />;
