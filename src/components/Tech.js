import React from 'react';
import styled, { css } from "styled-components";

import { media } from "../utils/style";
import Showcase from "../components/showcase"



class Tech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {logos:[]}
  }

  componentWillRecievedProps(newProps, oldProps) {
    if (
      newProps.logos &&
      JSON.stringify(newProps.logos) !== JSON.stringify(oldProps.logos)
    ) {
      this.setState({ logos: newProps.logos });
    }
  }

  render() {
    const logos = this.props.logos; 
  
    return(
      <div>
        <h4>Tech</h4>
        <span>Technologies I enjoy working with.</span>     
        <Showcase
            images={logos}
          />
      </div>
    );
  }
}

export default Tech;
