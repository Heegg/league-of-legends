import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import ChampionsList from './components/ChampionsList';
import ChampionsFilter from './components/ChampionsFilter';
import MyChampions from './components/MyChampions';
import AddChampions from './components/AddChampion';
import DWGSkins from './components/DWGSkins';
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';
import lolLogo from './logos/lolLogo.png';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const url = 'http://localhost:3000/champions';
  
  const [champions, setChampions] = useState([]);
  const [searchFiltered, setSearchFiltered] = useState(champions);

  const fetchData = async() => {
    try {
      const resp = await fetch(url);
      const champions = await resp.json();
      setChampions(champions);
      setSearchFiltered(champions);
    } catch (err) {
        alert(err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchValue) => {
    const searchFiltered = champions.filter(champion => 
      champion.name.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchFiltered(searchFiltered);
  }


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
                <Nav.Link eventKey="disabled" disabled>Add Champions</Nav.Link>
                {/* <Nav.Link as={Link} to="/addchampions">Add Champions</Nav.Link> */}
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
              <ChampionsFilter handleSearch={handleSearch}/>
              <ChampionsList champions={searchFiltered}/>
            </>
          }/>
          <Route path="/mychampions" element={
            <>
              <Header/>
              <MyChampions champions={champions} setChampions={setChampions}/>
            </>
          }/>
          <Route path="/addchampions" element={
            <>
              <Header/>
              <AddChampions />
            </>
          }/>
          <Route path="/dwgskins" element={
            <DWGSkins />
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
