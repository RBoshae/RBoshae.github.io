import React from 'react';
import styled from "styled-components";
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

const Education = () => {
  return(
    <div id="education">
      <h4>Education</h4>
      <span>Education I've received.</span>
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
    </div>
  );
}

export default Education;
