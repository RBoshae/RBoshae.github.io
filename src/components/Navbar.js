import React from 'react'
import Link from 'gatsby-link'

const ListLink = props =>
  <li
    style={{ display: 'inline-block', marginRight: '1rem'}}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const Navbar = ({ siteTitle, style }) => (
  <div>
    <header style={style}>
      <Link to="/" style={{ textShadow: 'none', backroundImage: 'none'}}>
        <h3 style={{ display: 'inline'}}>{siteTitle}</h3>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right'}}>
        <ListLink to="/#portfolio">Portfolio</ListLink>
        <ListLink to="/#tech">Tech</ListLink>
        <ListLink to="/#education">Education</ListLink>
        <ListLink to="/#honors">Honors & Awards</ListLink>
        <ListLink to="/blog">Blog</ListLink>
        <ListLink to="/#contact">Contact</ListLink>
      </ul>
    </header>
  </div>
)

export default Navbar
