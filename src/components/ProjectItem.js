import React from 'react';
import ReactDom from 'react-dom';
import Link from 'gatsby-link'

const projectItemStyle = {
  boxShadow: '0 4px 8px 0 regba(0, 0, 0, 0.2)',
  width: '16rem',
  height: '18rem',
  margin: 'auto',
  textAlign: 'left',
  boxSizing: 'border-box',
  // paddingLeft: '8px',
  // paddingRight: '8px',
  border: 'solid 5px',
  boxShadow: '5px 10px #888888'

};

const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
  marginBottom:'0'
}
class ProjectItem extends React.Component {
  render() {
    return (
      <div className="columns project-item">
        <div className="item-wrap">
          <div style={projectItemStyle} >
            <a href={this.props.project.projectLink}>
              <div
                style={{
                  position: 'relative',
                  zIndex:'1',
                  margin: 'auto',
                  color: 'white',
                  fontSize: '1.75rem',
                  paddingTop: "1rem", textAlign: "center",
                  height: "45%",
                  verticalAlign: 'center',

                }} >
                <div className="bg" style={{
                  position: 'absolute',
                  zIndex: '-1',
                  top: '0',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  backgroundImage: `linear-gradient(
                      rgba(0, 0, 0, 0.55),
                      rgba(0, 0, 0, 0)
                    ), url(${this.props.project.pictureLink})`,
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'cover',

                }}></div>
                <h3>{this.props.project.title}</h3>
              </div>
              <div style={{ paddingTop: ".11rem",
                            paddingLeft: ".5rem",
                            paddingRight: ".5rem",
                            color: "black"}}>
                <p style={pStyle}>{this.props.project.languages.join(", ")}</p>
                <p>{this.props.project.descirption}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
