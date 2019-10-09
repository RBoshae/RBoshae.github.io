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


const Honors = () => {
  return(
    <div id="honors">
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
    </div>
  );
}

export default Honors;
