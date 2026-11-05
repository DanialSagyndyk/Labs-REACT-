import { useEffect, useState } from 'react';
import { getProducts } from '../services/service.js';
export default function useProducts(params) {
  const [data, setData] = useState({ products: [], total: 0, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const key = JSON.stringify(params);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true); setError('');
    getProducts({ ...params, signal: controller.signal })
      .then(result => setData(result))
      .catch(err => { if (err.name !== 'AbortError') setError(err.message || 'Could not load products.'); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [key]);
  return { ...data, loading, error };
}
