import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Agenda from './pages/Agenda';
import CheckIn from './pages/CheckIn';
import VenueMap from './pages/VenueMap';
import Networking from './pages/Networking';
import MobileNav from './components/MobileNav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/map" element={<VenueMap />} />
          <Route path="/network" element={<Networking />} />
        </Routes>
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
