import { useState, createContext } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Pinfo from './pages/Pinfo';
import ExpInfo from './pages/ExpInfo';
import ErrorPage from './pages/ErrorPage';
export const Context = createContext();

function App() {

  const [error, setError] = useState();

  return (
    <Router>
    <Context.Provider value={{error, setError}}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal-information" element={<Pinfo />} />
            <Route path="/experience-information" element={<ExpInfo />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Context.Provider>
    </Router>
  )
}

export default App