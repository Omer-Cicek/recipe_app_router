import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Details from './pages/details/Details';
import { useState } from 'react';

function App() {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar userLogin={userLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            userLogin={userLogin}
            setUserLogin={setUserLogin}
            element={<Login />}
          />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
