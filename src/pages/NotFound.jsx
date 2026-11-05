<<<<<<< HEAD
import { Link } from 'react-router-dom';
export default function NotFound(){return <section className="not-found"><p className="eyebrow">ERROR 404</p><h1>Page not <span>found.</span></h1><p className="muted">The page may have moved or the URL may be incorrect.</p><Link className="button primary" to="/">Return home ↗</Link></section>}
=======
import {Link} from 'react-router-dom';
export default function NotFound(){return <main className="page not-found"><span className="error-code">404</span><h1>Looks like you’re <em>off track.</em></h1><p className="lead">The page you’re looking for doesn’t exist.</p><Link className="primary" to="/">Back home →</Link></main>}
>>>>>>> 501ecf7d42a68514cf0a65e89d3f5da78d2781a9
