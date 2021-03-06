import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const { selectedType } = useSelector((state) => state.auth);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex flex-column flex-lg-row justify-content-between"
          >
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>

              {/* accept */}
              {selectedType === "accept" ? (
                <>
                  <Link to="/payment" className="nav-link">
                    Payment
                  </Link>
                  <Link to="/verification" className="nav-link">
                    Verification
                  </Link>
                  <Link to="/pool_articipant" className="nav-link">
                    Pools and Participants
                  </Link>
                  <Link to="/api" className="nav-link">
                    API
                  </Link>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                  <Link to="/Dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </>
              ) : null}

              {/* pool */}
              {selectedType === "pool" ? (
                <>
                  <Link to="/api" className="nav-link">
                    API
                  </Link>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                  <Link to="/Dashboard" className="nav-link">
                    Dashboard
                  </Link>
                  <Link to="/payment" className="nav-link">
                    Payment
                  </Link>
                </>
              ) : null}

              {/* participant */}
              {selectedType === "participant" ? (
                <>
                  <Link to="/payment" className="nav-link">
                    Payment
                  </Link>
                  <Link to="/verification" className="nav-link">
                    Verification
                  </Link>
                  <Link to="/pool_articipant" className="nav-link">
                    Pools and Participants
                  </Link>
                  <Link to="/pleging" className="nav-link">
                    Pleging
                  </Link>
                </>
              ) : null}

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {selectedType === "accept" ? (
              <Link to="/login" type="button" className="btn btn-success">
                Login
              </Link>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
