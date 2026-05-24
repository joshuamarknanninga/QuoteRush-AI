import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import NewLead from './pages/NewLead';
import Leads from './pages/Leads';
import FollowUps from './pages/FollowUps';
import Pricing from './pages/Pricing';
import Settings from './pages/Settings';

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
