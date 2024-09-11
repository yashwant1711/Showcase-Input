import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Showcase from '../src/component/Showcase';
import FormPage from '../src/component/Form';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/showcase">Showcase</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
