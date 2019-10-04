import React from 'react';
import styled from "styled-components";
import { media } from "../utils/style";

const Item = styled.div`
  width: 50%;
  margin: 0;
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

const Experience = () => {
  return(
    <div id="experience">
      <h4>Experience</h4>
      <span>Where I've worked</span>
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
    </div>

  );
}

export default Experience;
