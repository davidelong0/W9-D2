import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNav() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
