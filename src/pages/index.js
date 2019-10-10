import React from "react";
import { graphql } from "gatsby";
import { Flex, Box } from "grid-styled";
import styled, { css } from "styled-components";
import Img from "gatsby-image";
import FlickrHero from "react-flickr-hero";

import { media } from "../utils/style";

import Layout from "../components/layout";
import NavBar from "../components/navbar";
import HeroText from "../components/heroText";
import SocialIcons from "../components/socialIcons";
import About from "../components/about"
import Portfolio from "../components/portfolio";
import Experience from "../components/experience";
import Tech from "../components/tech";
import Education from "../components/education";
import Honors from "../components/honors";

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`;

const Testo = styled.div`
  width: 100vw !important;
  height: 100vh !important;
  background: gray;
  `;

const Title = styled.h1`
  font-family: "Raleway";
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
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

  ${props =>
    props.dark &&
    css`
      background: #292929;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #fff;
        font-weight: 700;
      }
      h4 {
        color: #fff;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
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
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  ${media.xs`
    width: 90%;

  `}
`;

export default props => {
  const content = (
    <Content>
      <FlickrHero
        api_key="0d983d64d487fe4c4568fd824d39c29b"
        user_id="94057848@N06"
        album_id="72157711187091298"
        fillPage
      />
      <HeroText />
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
            name: "twitter",
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

      <Title small>Portfolio</Title>
      <a id="portfolio">Portfolio</a>
      <Portfolio projects={props.data.allMarkdownRemark.edges}/>

      <a id="experience">Experience</a>
      <Section center dark>
        <h4>Experience</h4>
        <span>Where I've worked.</span>
        <Item>
          <span>Nov 2018 - PRESENT</span>
          <h6>L3Harris Ocean Systems</h6>
          <p>Software Engineer</p>
        </Item>

        <Item>
          <span>Jun 2016 - May 2017</span>
          <h6>UC Riverside Embedded Systems Lab</h6>
          <p>Undergraduate Research Assistant</p>
        </Item>

        <Item>
          <span>Feb 2016 - Jun 2017</span>
          <h6>Youth Policy Institute Charter Schools</h6>
          <p>Technical Support Technician</p>
        </Item>

        <Item>
            <span>Jun 2012 - May 2015</span>
            <h6>MarketStar</h6>
            <p>Territory Manager, Google</p>
        </Item>
      </Section>

      <a id="tech">Tech</a>
      <Section center>
        <h4>Tech</h4>
        <Tech 
          logos={
            props.data.allImageSharp.edges
            }
            />
      </Section>

      <a id="education">Education</a>
      <Section center dark>
      <h4>Education</h4>
      <Item>
        <span>2016 - 2018</span>
        <h6>B.S. Computer Science With High Honors, GPA 3.77</h6>
        <p>University of California, Riverside</p>
      </Item>
      <Item>
        <span>Transfer 2016</span>
        <h6>General Science</h6>
        <p>Santa Monica College</p>
      </Item>
      <Item>
        <span>Transfer 2016</span>
        <h6>Mathematics</h6>
        <p>Moorpark College</p>
      </Item>
      </Section>

      <a id="honorsAndAwards">Honors & Awards</a>
      <Section center>
      <h4>Honors & Awards</h4>
      <span>A list of honors awards I have received for my work.</span>
      <Item>
        <span>2018</span>
        <h6>Major League Hackathon 2nd Place Winner</h6>
        <p>Citrus Hacks</p>
      </Item>
      <Item>
        <span>2018</span>
        <h6>Best Game Hack</h6>
        <p>Gigabyte/AORUS</p>
      </Item>
      <Item>
        <span>2018</span>
        <h6>Equipvision's Choice Award</h6>
        <p>Equipvision</p>
      </Item>
      <Item>
        <span>2016</span>
        <h6>Summer Bridge to Research Grant</h6>
        <p>UC RIverside</p>
      </Item>
      </Section>
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
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "~/content/assets/projects/"}}) {
    edges {
      node {
        timeToRead
        excerpt(pruneLength: 120)
        fields {
          slug
        }
        frontmatter {
          title
          date
          tags
          image {
            childImageSharp {
              sizes(
                maxWidth: 500
                duotone: {
                  highlight: "#333333"
                  shadow: "#111111"
                  opacity: 65
                }
              ) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
  allImageSharp: allFile(filter: {relativePath: {regex: "/logos/"}}) {
    edges {
      node {
        id
        childImageSharp {
          sizes(fit: CONTAIN) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }  
      }
    }
  }
}
`;
