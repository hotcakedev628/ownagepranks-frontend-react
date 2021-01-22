import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavLayout = ({
  isOpen,
  ...rest
}) => {

  return (
    <div
      className="nav-layout"
    >
      <Navbar
        color="dark"
        dark
        expand="md"
        {...rest}
      >
        <NavbarBrand href="/">Ownagepranks</NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                href="https://github.com/hotcakedev628/ownagepranks-test-backend-cakephp"
                target="_blank"
              >
                Backend-CakePHP
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/hotcakedev628/ownagepranks-test-frontend-react"
                target="_blank"
              >
                Frontend-React
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>v1.0.0</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavLayout