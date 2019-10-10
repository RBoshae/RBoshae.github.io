import React from "react";
import styled, { css } from "styled-components";
import Typist from "react-typist";

import { media } from "../utils/style";

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 72px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: "Raleway";
  position: absolute;
  top: 50%;
  left: 50%;
  ${media.md`
  left: 25%;
  top: 40%;
`}
  ${media.xs`
  left: 3%;
  top: 15%;
  letter-spacing: 12px;
`}
`;

class HeroText extends React.Component {
  render() {
    if (this.props.text) {
      return (
        <Typist>
          <StyledTypist {...this.props}>
            <strong>
              {this.props.text.split(" ").slice(0, 1)}
              <br />
            </strong>
            {this.props.text
              .split(" ")
              .slice(1)
              .join(" ")}
          </StyledTypist>
        </Typist>
      );
    }
    return (
      <StyledTypist cursor={{ show: false }} {...this.props}>
        <strong>I Create</strong> Websites
        <Typist.Backspace count={9} delay={500} />
        <span> Embedded Programs </span>
        <Typist.Backspace count={18} delay={500} />
        <span> Android Applications</span>
        <Typist.Backspace count={20} delay={500} />
        <span> Poor Life Decisions</span>
        <Typist.Delay ms={300} />
        <span>.</span>
        <Typist.Delay ms={400} />
        <span>.</span>
        <Typist.Delay ms={500} />
        <span>.</span>
        <Typist.Backspace count={33} delay={10} />
        <strong>But Mostly I Just Create</strong> Cool Stuff
      </StyledTypist>
    );
  }
}

export default HeroText;
