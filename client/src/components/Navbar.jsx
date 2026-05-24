import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'Dashboard'],
  ['/new-lead', 'New Lead'],
  ['/leads', 'Leads'],
  ['/follow-ups', 'Follow-Ups'],
  ['/pricing', 'Pricing'],
  ['/settings', 'Settings']
];

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <div className="brand">QuoteRush AI</div>
      <nav>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
