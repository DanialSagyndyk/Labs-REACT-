import { Link } from 'react-router-dom';
export default function ProductCard({ product }) {
  return <article className="product-card"><Link to={`/items/${product.id}`} className="product-image-wrap"><img src={product.thumbnail} alt={product.title} loading="lazy" /></Link><div className="product-card-body"><div className="card-meta"><span className="tag">{product.category}</span><span className="rating">★ {product.rating}</span></div><h3><Link to={`/items/${product.id}`}>{product.title}</Link></h3><p className="muted clamp">{product.description}</p><div className="card-bottom"><strong>${product.price.toFixed(2)}</strong><Link className="text-link" to={`/items/${product.id}`}>Details ↗</Link></div></div></article>;
}
