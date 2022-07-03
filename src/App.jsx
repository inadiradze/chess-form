import { useState} from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Pinfo from './pages/Pinfo';
import ErrorPage from './pages/ErrorPage';

function App() {


  return (
    <Router>
      <div className="App">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal-information" element={<Pinfo />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
