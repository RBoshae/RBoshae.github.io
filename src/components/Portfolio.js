import React from "react";
import styled, { css } from "styled-components";
import { Flex, Box } from "grid-styled";
import Img from "gatsby-image";

import { media } from "../utils/style";


import ReactDom from "react-dom";
import Link from "gatsby-link";
import ProjectItem from './ProjectItem';

// import project background images
// import Huddle from "../content/assets/projects/Huddle/BG-700x400.png";
// import Breakout from "../content/assets/projects/Breakout/BG-700x400.png";
// import FeatureSelectionFromNN from "../content/assets/projects/Feature-Selection-With-Nearest-Neighbor/BG-700x400.jpg";
// import miniGL from "../content/assets/projects/miniGL/BG-700x400.png";
// import personalWebsitev1 from "../content/assets/projects/PersonalWebsite/BG-700x400.png";
// import RayTracer from "../content/assets/projects/RayTracer/BG-700x400.png";
// import rshell from "../content/assets/projects/rshell/BG-700x400.png";
// import SlidingPuzzle from "../content/assets/projects/SlidingPuzzle/BG-700x400.png";
// import PhantomEdge from "../content/assets/projects/PhantomEdge/PhantomEdge.jpg";
// import AirlineDBMS from "../content/assets/projects/AirlineDBMS/AirlineDBMS.jpg";
// import SpeakWithMe from "../content/assets/projects/SpeakWithMe/SpeakWithMe.jpg";
// import Siesta from "../content/assets/projects/Siesta/Siesta.png";

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

const project = ({ excerpt, image, tags, slug, title, timeToRead }) => (
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

  //IDEA: Implement a scraper to grab projects from GitHub automatically.
  getProjects(){
    this.setState(
      { projects:[
        {
          title: "Phantom Edge",
          descirption: "A first person Virtual Reality game set in a desert arena that builds upon the vastly popular MOBA game genre.",
          languages: ["C#", "Unity", "Oculus Rift", "Oculus Touch"],
          pictureLink: "",
          projectLink: "https://github.com/RBoshae/PhantomEdge",
          lastUpdate: "Jun 14, 2018"
        },
        {
          title: "Airline Database Management System",
          descirption: "The DBMS includes a set of dummy data, scripts to load the data into a DB, and Java code to build the client application.",
          languages: ["Java", "PostgreSQL"],
          pictureLink: "",
          projectLink: "https://github.com/RBoshae/AirlineDatabase",
          lastUpdate: "Jun 10, 2018"
        },
        {
          title: "Speak With Me",
          descirption: "An award winning VR game that transports you to Taipei, the capital of Taiwan. In game we teach you to speak Chinese.",
          languages: ["C#", "Unity", "Oculus Rift", "Oculus Remote"],
          pictureLink: "",
          projectLink: "https://devpost.com/software/speakwithme",
          lastUpdate: "Apr 22, 2018"
        },
        // {
        //   title: "Siesta: Sleep Cycle Tracker",
        //   descirption: "An Anroid mobile application designed to track and improve your sleep.",
        //   languages: ["Android", "Java", "XML"],
        //   pictureLink: Siesta,
        //   projectLink: "https://github.com/RBoshae/siestazzz",
        //   lastUpdate: "Mar 12, 2018"
        // },
        // {
        //   title: "Huddle: Team Management",
        //   descirption: "A collaborative tool for managing projects.",
        //   languages: ["React", "HTML", "CSS", "JavaScript"],
        //   pictureLink: Huddle,
        //   projectLink: "https://github.com/RBoshae/ReflexManagment",
        //   lastUpdate: "Nov 25, 2017"
        // },
        // {
        //   title: "Breakout",
        //   descirption: "The good ol' Atari game reinvented. Every bit was hand wired and programmed from scratch. The best part - reverse engineering the Nintendo controller.",
        //   languages: ["C", "Embedded Systems"],
        //   pictureLink: Breakout,
        //   projectLink: "https://github.com/RBoshae/Breakout",
        //   lastUpdate: "June 2017"
        // },
        // {
        //   title: "Feature Optimizer",
        //   descirption: "A machine learning algorithm that optimizes the nearest neighbor classifier. I use forward and backward selection to drop irrelevant features from the data set.  ",
        //   languages: ["C++"],
        //   tags: ["Machine Learning"],
        //   pictureLink: FeatureSelectionFromNN,
        //   projectLink: "https://github.com/RBoshae/feature-selection-with-nearest-neighbor",
        //   lastUpdate: "Nov 2016"
        // },
        // {
        //   title: "Sliding Puzzle Solver",
        //   descirption: "Artificially intelligent program, using A* search, that can solve 3x3 sliding tile puzzles.",
        //   languages: ["C++"],
        //   tags: ["AI"],
        //   pictureLink: SlidingPuzzle,
        //   projectLink: "https://github.com/RBoshae/Puzzle_Solver",
        //   lastUpdate: "Feb 21, 2016"
        // },
        // {
        //   title: "Simple Ray Tracer",
        //   descirption: "A basic ray tracer created with OpenGL.",
        //   languages: ["C++"],
        //   tags: ["Graphics"],
        //   pictureLink: RayTracer,
        //   projectLink: "https://github.com/RBoshae/BasicRayTracer",
        //   lastUpdate: "Dec 21, 2017"
        // },
        // {
        //   title: "MiniGL",
        //   descirption: "A simplified 3D rendering pipeline created with OpenGl.",
        //   languages: ["C++"],
        //   tags: ["Graphics"],
        //   pictureLink: miniGL,
        //   projectLink: "https://github.com/RBoshae/miniGL",
        //   lastUpdate: "Nov 28, 2017"
        // },
        // {
        //   title: "rshell",
        //   descirption: "A custom shell terminal writtin in C++",
        //   languages: ["C++"],
        //   tags: ["OS"],
        //   pictureLink: rshell,
        //   projectLink: "https://github.com/RBoshae/rshell",
        //   lastUpdate: "Dec 2, 2017"
        // },
        // {
        //   title: "Personal Website 1.0",
        //   descirption: "My personal website written in HTML, CSS, JavaScript.",
        //   languages: ["Bootstrap", "HTML", "CSS" , "JavaScript", "jQuery"],
        //   tags: ["WebDev"],
        //   pictureLink: personalWebsitev1,
        //   projectLink: "https://github.com/RBoshae/Personal-Website-1",
        //   lastUpdate: "Jan 3, 2017"
        // },
        // {
        //   title: "Personal Website 2.0",
        //   descirption: "My personal website written revamped with Gatsby",
        //   languages: ["HTML", "CSS" , "JavaScript", "Reactjs"],
        //   tags: ["WebDev"],
        //   pictureLink: "",
        //   projectLink: "https://rboshae.github.io/",
        //   lastUpdate: "Jul 26, 2018"
        // },
    ]});
  }



  componentWillMount(){
    this.getProjects();
  }

  render() {
    // Generate array of projects
    let projectItems;
    // console.log('Before Map');
    // console.log(this.state.projects);
    if(this.state.projects){
      projectItems = this.state.projects.map( (project) => {
        // console.log(projectItems);
        return (
          <td key={project.title} style = {{
            paddingLeft: '.25rem',
            paddingRight: '.25rem'
          }}>
            <ProjectItem
              onMouseEnter={this.fadeBackground}
              onMouseLeave={this.resetBackground}
              project={project}/>
          </td>
        );
      });
    }

    // Transform array of projects to a table a of projects
    // Start with creating rows
    let projectItemRows = projectItems.reduce(function (rows, projectItem, i) {
      let rowIndex = Math.floor(i/3);
      if(i % 3 == 0) {
        rows[rowIndex] = [projectItem]
      } else {
        rows[rowIndex].push(projectItem)
      }
      return rows;
    }, [])

    // create table
    let projectItemTable
    if(projectItemRows){
      projectItemTable = projectItemRows.map( (projectItemRow, i) => {
        // console.log(projectItems);
        return (
          <tr key={i}>
            {projectItemRow}
          </tr>
        );
      });
    }
    console.log('Table', projectItemTable);

    console.log('After Map')
    console.log(projectItems); // Debugging
    return (
      <section id="portfolio">
          <h1>Portfolio</h1>
          <table id="projectTable">
            <thead>
            </thead>
            <tbody>
              {projectItemTable}
            </tbody>
          </table>
      </section>
    );
  }
}

export default Portfolio;
