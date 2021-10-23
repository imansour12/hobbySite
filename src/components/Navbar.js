import React from "react";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import "./NavbarStyles.css";

function Navbar() {
  return (
    <div>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="sm"
        bg="warningdfj"
        variant="dark"
      >
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
            <Link className="basedLink" to="/">
              FNN
            </Link>
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link href="#features">
                <Link className="basedLink" to="/features">
                  Features
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing">
                <Link className="basedLink" to="/pricing">
                  Pricing
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="Different Things"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  <Link className="basedLink" to="/action">
                    Action
                  </Link>
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  <Link className="basedLink" to="/anotheraction">
                    Another action
                  </Link>
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  <Link className="basedLink" to="/someting">
                    Something
                  </Link>
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                  <Link className="basedLink" to="/seperatedlink">
                    Separated link
                  </Link>
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link href="#deets">
                <Link className="basedLink">More deets</Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                <Link className="basedLink" to="/languages">
                  Change Language
                </Link>
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;
