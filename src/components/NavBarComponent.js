import React from "react";
import { Navbar, Nav, Container, NavDropdown, Image, Dropdown } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Miller Connections</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Dropdown">
              <NavDropdown.Item href="#">Action 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Action 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Action 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Dropdown>
          <Dropdown.Toggle variant="link" aria-controls="notifications-dropdown" className="no-triangle">
            <i class="fas fa-bell fa-fw"></i>
            <span className="badge badge-danger badge-counter">3</span>
          </Dropdown.Toggle>
          <Dropdown.Menu id="notifications-dropdown">
            <Dropdown.Item href="#">Notification 1</Dropdown.Item>
            <Dropdown.Item href="#">Notification 2</Dropdown.Item>
            <Dropdown.Item href="#">Notification 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <span className="mx-3">Brendon Hall</span>
        <Dropdown>
          <Dropdown.Toggle variant="link" aria-controls="profile-dropdown" className="no-triangle">
            <Image src="https://via.placeholder.com/30" roundedCircle />
          </Dropdown.Toggle>
          <Dropdown.Menu id="profile-dropdown">
            <Dropdown.Item href="#">Profile</Dropdown.Item>
            <Dropdown.Item href="#">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
