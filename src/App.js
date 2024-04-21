import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from "./components/about";
import Nav from "./components/nav";
import Contactpage from "./components/contactpage";
import PokedexFile from "./components/pokedexfile";
import TestPoke from "./components/testPoke";
function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Nav />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<TestPoke />} />
              <Route path="/pokedexfile" element={<PokedexFile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactpage" element={<Contactpage />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;