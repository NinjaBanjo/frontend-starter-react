import React from 'react';
import {
  Nav,
  NavDropdown
} from 'react-bootstrap';
import {
  NavItemLink,
  MenuItemLink
} from 'react-router-bootstrap';

const isLoggedIn = false;

export default class AccountNav extends React.Component {
  render() {
    if (isLoggedIn) {
      return (
        <Nav navbar right>
          <NavItemLink to="account">Account</NavItemLink>
        </Nav>
      )
    } else {
      return (
        <Nav navbar right>
          <NavItemLink to="login">Login</NavItemLink>
          <NavItemLink to="register">Register</NavItemLink>
        </Nav>
      )
    }
  }
}