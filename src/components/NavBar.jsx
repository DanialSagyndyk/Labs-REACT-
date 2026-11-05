import { NavLink } from 'react-router-dom';
const links = [['/', 'Home'], ['/items', 'Products'], ['/dashboard', 'Dashboard'], ['/quests', 'Quest Manager'], ['/about', 'About']];
export default function NavBar() {
  return <header className="navbar"><NavLink to="/" className="brand"><span className="brand-mark">Q</span> Quest<span>Hub</span></NavLink><nav>{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}</nav><NavLink className="login-link" to="/login">Log in ↗</NavLink></header>;
}
