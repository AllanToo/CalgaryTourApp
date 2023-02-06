import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} style={{ width: "300px" }}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              style={{
                fontSize: "20px",
                color: "#0AA1DD",
                fontWeight: "bold",
                marginLeft: "400px",
                marginRight: "10px",
              }}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{
                fontSize: "20px",
                color: "#0AA1DD",
                fontWeight: "bold",
                marginLeft: "50px",
                marginRight: "10px",
              }}
              href="/hosts"
            >
              Hosts
            </Nav.Link>
            <Nav.Link
              style={{
                fontSize: "20px",
                color: "#0AA1DD",
                fontWeight: "bold",
                marginLeft: "50px",
                marginRight: "10px",
              }}
              href="/hosts"
            >
              Search
            </Nav.Link>
            <Nav.Link
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "300px",
                marginRight: "10px",
              }}
              href="/"
            >
              Profile
            </Nav.Link>
            <Button
              variant="primary"
              style={{
                fontWeight: "normal",
                MarginLeft: "30px",
                width: "120px",
                height: "45px",
              }}
            >
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
