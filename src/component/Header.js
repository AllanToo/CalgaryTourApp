import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  return (
    <Navbar
      className="navbar-skyblue"
      collapseOnSelect
      variant="skyblue"
      expand="md"
    >
      <Navbar.Brand>
        {/* <img
          src={logo}
          alt="logo"
          width="120px"
          style={{ paddingLeft: "10px" }}
        /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navber-nav" />
      <Navbar.Collapse id="basic-navber-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/main">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/hosts">
            <Nav.Link>Hosts</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
