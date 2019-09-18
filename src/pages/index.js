import React from "react"
import { graphql } from "gatsby"
import  styled, { css } from "styled-components"
import FlickrHero from "react-flickr-hero"

import { media } from "../utils/style";

import Bio from "../components/bio"
import Layout from "../components/layout"
import NavBar from "../components/NavBar"
import SocialIcons from "../components/socialIcons";
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"
import About from "../components/About.js"
import Portfolio from "../components/Portfolio.js";
import Tech from "../components/Tech";
import Education from "../components/Education.js";
import Honors from "../components/Honors.js";
import Contact from "../components/Contact";

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }

  & > h1 {
    test-align: center;
  }
`;

const Testo = styled.div`
  width: 100vw !important;
  height: 100vw !important;
  background: gray;
  `;

const Title = styled.h1`
  font-family: "Raleway";
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom:40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`;

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: "Lato";
  }

  p {
    margin-bottom: 64px;
    sfont-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Raleway";
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
      `}

    `}
`;

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6 {
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
`;

export default props => {
  const content = (
    <Content>
      <FlickrHero
        api_key="1b4e5b0203fab0d5731afe68f0a543e1"
        user_id="132343752@N06"
        album_id="72157694825254121"
        fillPage
      />
      <SocialIcons
        style={{
          position: "absolute",
          margin: "0 auto",
          left: 0,
          right: 0,
          bottom: 16
        }}
        icons={[
          {
            name:"twitter",
            href: "https://twitter.com/rickboshae"
          },
          {
            name: "github-alt",
            href: "https://github.com/rboshae"
          },
          {
            name: "linkedin",
            href: "https://ie.linkedin.com/in/boshae"
          }
        ]}
        />

      <a id="about-me">About Me</a>
      <Section>
        <About />
      </Section>

      <a id="portfolio">Portfolio</a>
      <Section>
        <Portfolio projects={props.data.allMarkdownRemark.edges}/>
      </Section>

      <a id="tech">Tech</a>
      <Section>
        <Tech/>
      </Section>

      <a id="education">Education</a>
      <Section>
        <Education/>
      </Section>

      <a id="honorsAndAwards">Honors & Awards</a>
      <Section>
        <Honors/>
      </Section>

      <Contact/>
    </Content>
  );
  return (
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  );
};

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "~/content/assets/projects/"}}) {
    edges {
      node {
        excerpt(pruneLength: 120)
        frontmatter {
          title
          tags
        }
        fields {
          slug
        }
      }
    }
  }
}
`
