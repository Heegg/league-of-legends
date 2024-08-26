import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import ChampionsList from './components/ChampionsList';
import MyChampions from './components/MyChampions';
import AddChampions from './components/NewChampion';
import Skins from './components/DamwonSkins';
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';
import lolLogo from './logos/lolLogo.png';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar         
          bg="dark" 
          data-bs-theme="dark"
          expand="md" 
          className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img 
                src={lolLogo} 
                alt='lolLogo'
                style={{ height: '40px', width: 'auto' }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/champions">Champions</Nav.Link>
                <Nav.Link as={Link} to="/mychampions">My Champions</Nav.Link>
                <Nav.Link as={Link} to="/addchampions">Add Champions</Nav.Link>
                <Nav.Link as={Link} to="/dwgskins">DWG Skins</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <Home />        
            </>
          }/>
          <Route path="/champions" element={
            <>
              <Header/>
              <ChampionsList />
            </>
          }/>
          <Route path="/mychampions" element={
            <>
              <Header/>
              <MyChampions />
            </>
          }/>
          <Route path="/addchampions" element={
            <>
              <Header/>
              <AddChampions />
            </>
          }/>
          <Route path="/dwgskins" element={<Skins />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
