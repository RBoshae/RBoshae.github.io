import React from "react";
import styled, { css } from "styled-components";
import { Flex, Box } from "grid-styled";
import Img from "gatsby-image";

import { media } from "../utils/style";

import Button from './button'


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

const Tile = styled.div`
`;
const TileContent = styled.a`
`;

const projectsContainer = {
  position: 'absolute'
};

const Project = ({ excerpt, image, tags, slug, title, timeToRead }) => (
  <Title>
    <a href={slug}>
      {image ? <Img sizes={image.childImageSharp.sizes} /> : <div />}
    </a>
    <TileContent href={slug}>
      <h1>{title}</h1>
      <p>{excerpt}</p>
    </TileContent>
  </Title>
)

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = { projects: [], viewAll: false};

  }

  componentWillRecievedProps(newProps, oldProps) {
    if (
      newProps.projects &&
      JSON.stringify(newProps.projects) !== JSON.stringify(oldProps.projects)
    ) {
      this.setState({projects: newProps.projects});
    }
  }

  toggleShow() {
    this.setState({ viewAll: ~this.state.viewAll });
  }

  render() {
    const projects = this.props.projects.map(project => (
      <Box key={project.node.fields.slug} px={2} width={[1, 1 / 2, 1 / 3, 1 / 4]}>
        <Project
          key={project.node.fields.slug}
          excerpt={project.node.excerpt}
          slug={project.node.fields.slug}
          timeToRead={project.node.timeToRead}
          {...project.node.frontmatter}
        />
      </Box>
    ));
    if (!this.state.viewAll) {
      projects.splice(4);
    }
    return (
      <Flex justifyContent="center" px={1} flexWrap="wrap">
        {projects}
        <Box m="auto">
          <Button center onClick={() => this.toggleShow()}>
            {this.state.viewAll ? "View Less" : "View Less"}
          </Button>
        </Box>
      </Flex>
    );
  }
}

export default Portfolio;
