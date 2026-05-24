import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import NewLead from './pages/NewLead.jsx';
import Leads from './pages/Leads.jsx';
import FollowUps from './pages/FollowUps.jsx';
import Pricing from './pages/Pricing.jsx';
import Settings from './pages/Settings.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="layout">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new-lead" element={<NewLead />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/follow-ups" element={<FollowUps />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
