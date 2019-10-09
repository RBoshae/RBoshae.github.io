import React from 'react';
import styled, { css } from "styled-components";
import { Flex, Box } from "grid-styled";
import Img from "gatsby-image";
import { media } from "../utils/style";

const Base = styled.div`
  width: 40%;
  margin: 0 auto !important;
  padding: 0;
  overflow: hidden;
  padding-top: 40px;

  ${media.xs`
    width: 95%;
    margin-left: 0;
  `}
`;

class Tech extends React.Component {
  render() {
    const logos = this.props.logos.reverse().map(logo => (
      <Box key={logo.node.id} px={2} width={[1 / 2, 1 / 3]}>
        <Img sizes={logo.node.childImageSharp.sizes} />
      </Box>
    ));
    return (
      <Base>
        <span>Technologies I enjoy working with</span>
        <Flex flexWrap="wrap">{logos}</Flex>
      </Base>
    );
  }
}


export default Tech;
