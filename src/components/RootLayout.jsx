import { Outlet } from 'react-router-dom';
import NavBar from './NavBar.jsx';
export default function RootLayout() {
  return <div className="app-shell"><NavBar /><main className="main"><Outlet /></main><footer className="footer">QuestHub · React Router & Application Architecture · 2026</footer></div>;
}
