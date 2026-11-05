<<<<<<< HEAD
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar.jsx';
export default function RootLayout() {
  return <div className="app-shell"><NavBar /><main className="main"><Outlet /></main><footer className="footer">QuestHub · React Router & Application Architecture · 2026</footer></div>;
}
=======
import { NavLink, Outlet } from 'react-router-dom';
export default function RootLayout(){return <div className="shell"><header className="topbar"><NavLink to="/" className="brand">✦ Quest<span>Hub</span></NavLink><nav><NavLink to="/">Home</NavLink><NavLink to="/items">Explore</NavLink><NavLink to="/dashboard">Dashboard</NavLink><NavLink to="/about">About</NavLink><NavLink to="/login" className="login-link">Login ↗</NavLink></nav></header><Outlet/><footer>QuestHub · Your next adventure starts here</footer></div>}
>>>>>>> 501ecf7d42a68514cf0a65e89d3f5da78d2781a9
