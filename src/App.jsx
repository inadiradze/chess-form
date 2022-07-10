import { useState, createContext } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Pinfo from './pages/Pinfo';
import ExpInfo from './pages/ExpInfo';
import ErrorPage from './pages/ErrorPage';
import Onboarding from './pages/Onboarding';
export const Context = createContext();

function App() {

  const [error, setError] = useState();
  const [expDone, setExpDone] = useState(false);
  const [pinfoDone, setPinfoDone] = useState(false);

  return (
    <Router>
    <Context.Provider value={{error, setError,expDone, setExpDone, pinfoDone, setPinfoDone}}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal-information" element={<Pinfo />} />
            <Route path="/experience-information" element={<ExpInfo />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Context.Provider>
    </Router>
  )
}

export default App