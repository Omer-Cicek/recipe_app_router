import './App.css';
//react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//imported pages to used for router
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Details from './pages/details/Details';
import PrivateRouter from './router/PrivateRouter';

//component
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="/" exact element={<Login />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
