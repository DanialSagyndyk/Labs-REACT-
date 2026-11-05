import { Link } from 'react-router-dom';
export default function NotFound(){return <section className="not-found"><p className="eyebrow">ERROR 404</p><h1>Page not <span>found.</span></h1><p className="muted">The page may have moved or the URL may be incorrect.</p><Link className="button primary" to="/">Return home ↗</Link></section>}
