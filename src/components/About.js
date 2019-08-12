import React from "react";
import { Flex, Box } from "grid-styled";
import styled, { css } from "styled-components";

const Title = styled.div`
  font-family:"Raleway";
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;
`;
const About = () => {
    return(

      <div className="about" >
        <Title>About Me</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>
            Hi there, I'm Rick Boshae, a Software Engineer living in sunny Los
            Angeles, California. Currently I work for L3Harris Technologies focusing
            on software development for sonar systems. When I'm not hard at work
            decyphering information from noise, you'll likely find me exploring new
            technologies to build useful things. I hope to showcase some of the
            projects I work on here. For more informaion about me check out my blog
            and follow some of my social media links above or at the bottom of the
            page.
            </p>
            <Title>Areas of interest</Title>
            <p>
            I have a variety of interests but I tend to work on projects
            involving AI, Machine Learning, Graphics, VR, Networking, Databases,
             Mobile Applications.</p>
          </Box>

        </Flex>
      </div>

    );
}

export default About;
