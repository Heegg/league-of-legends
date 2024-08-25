import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import lolLogo from './logos/lolLogo.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src={lolLogo} 
              alt='lolLogo'
              style={{ height: '40px', width: 'auto' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#champions">Champions</Nav.Link>
              <Nav.Link href="#favorite">My Favorite</Nav.Link>
              <Nav.Link href="#addnew">Add New Champions</Nav.Link>
              <Nav.Link href="#dwgskins">DWG Skins</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  );
}

export default App;
