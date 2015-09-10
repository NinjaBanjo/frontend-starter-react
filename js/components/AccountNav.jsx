import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import AuthStore from 'js/stores/AuthStore';
import AuthActions from 'js/actions/AuthActions';
import {
  Nav,
  NavDropdown
} from 'react-bootstrap';
import {
  NavItemLink,
  MenuItemLink
} from 'react-router-bootstrap';

const isLoggedIn = false;
@connectToStores
export default class AccountNav extends React.Component {
  static getStores() {
    return [AuthStore]
  }

  static getPropsFromStores() {
    return {user: AuthStore.getState().user}
  }

  componentDidMount() {
    AuthActions.requestUserInfo();
  }

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
          {(this.props.user) ? this.props.user.id : 'null'}
          <NavItemLink to="login">Login</NavItemLink>
          <NavItemLink to="register">Register</NavItemLink>
        </Nav>
      )
    }
  }
}