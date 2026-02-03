import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Hybrid UI</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Features</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
