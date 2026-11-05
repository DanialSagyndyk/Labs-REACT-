import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import Loading from '../components/Loading.jsx';
import useProducts from '../hooks/useProducts.js';
import { getCategories } from '../services/service.js';

export default function Items() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const search = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  const minRating = searchParams.get('rating') || '';
  const sort = searchParams.get('sort') || 'title';
  const order = searchParams.get('order') || 'asc';
  const page = Math.max(1, Number(searchParams.get('page') || 1));
  const { products, total, totalPages, loading, error } = useProducts({ search, category, minRating, sort, order, page, limit: 9 });
  useEffect(() => { const c = new AbortController(); getCategories(c.signal).then(setCategories).catch(() => {}); return () => c.abort(); }, []);
  const update = (key, value) => { const next = new URLSearchParams(searchParams); if (value) next.set(key, value); else next.delete(key); if (key !== 'page') next.delete('page'); setSearchParams(next); };
  return <section className="page"><div className="page-heading"><div><p className="eyebrow">PRODUCT EXPLORER</p><h1>Explore <span>products.</span></h1><p className="muted">Search, filter and sort products from a live REST API.</p></div><span className="result-count">{total} results</span></div>
    <div className="filter-panel"><label className="search-box">⌕ <input value={search} onChange={e => update('q', e.target.value)} placeholder="Search products..." /></label><select value={category} onChange={e => update('category', e.target.value)}><option value="">All categories</option>{categories.map(c => <option key={c} value={c}>{c.replaceAll('-', ' ')}</option>)}</select><select value={minRating} onChange={e => update('rating', e.target.value)}><option value="">Any rating</option><option value="4">4.0+ rating</option><option value="4.5">4.5+ rating</option></select><select value={`${sort}:${order}`} onChange={e => { const [s,o] = e.target.value.split(':'); const n = new URLSearchParams(searchParams); n.set('sort',s); n.set('order',o); n.delete('page'); setSearchParams(n); }}><option value="title:asc">Name: A–Z</option><option value="price:asc">Price: low to high</option><option value="price:desc">Price: high to low</option><option value="rating:desc">Top rated</option></select><button className="button subtle" onClick={() => setSearchParams({})}>Reset</button></div>
    {loading ? <Loading label="Loading products from API..."/> : error ? <div className="notice error">{error} <button onClick={() => window.location.reload()}>Try again</button></div> : products.length === 0 ? <div className="empty-state"><h2>No products found</h2><p>Try changing your search or filters.</p><button className="button primary" onClick={() => setSearchParams({})}>Clear filters</button></div> : <div className="product-grid">{products.map(p => <ProductCard key={p.id} product={p}/>)}</div>}
    <div className="pagination"><button className="button ghost" disabled={page <= 1} onClick={() => update('page', String(page - 1))}>← Previous</button><span>Page <strong>{Math.min(page,totalPages)}</strong> of {totalPages}</span><button className="button ghost" disabled={page >= totalPages} onClick={() => update('page', String(page + 1))}>Next →</button></div>
  </section>;
}
