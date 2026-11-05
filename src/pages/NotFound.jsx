import {Link} from 'react-router-dom';
export default function NotFound(){return <main className="page not-found"><span className="error-code">404</span><h1>Looks like you’re <em>off track.</em></h1><p className="lead">The page you’re looking for doesn’t exist.</p><Link className="primary" to="/">Back home →</Link></main>}
