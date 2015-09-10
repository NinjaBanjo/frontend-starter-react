import React from 'react';
import { Link } from 'react-router';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import {
  NavItemLink,
  MenuItemLink
} from 'react-router-bootstrap';
import AccountNav from 'js/components/AccountNav';

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar brand={<Link to="home">KoalaFire</Link>}>
        <Nav navbar>
          <NavItemLink to="home" eventKey={1}>Home</NavItemLink>
          <NavItemLink to="about" eventKey={2}>About</NavItemLink>
        </Nav>
        <AccountNav />
      </Navbar>
    )
  }
}