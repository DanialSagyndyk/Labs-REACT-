const API = 'https://dummyjson.com';

async function request(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  return response.json();
}

export async function getProducts({ search = '', category = '', minRating = '', sort = 'title', order = 'asc', page = 1, limit = 12, signal } = {}) {
  let endpoint = search.trim()
    ? `${API}/products/search?q=${encodeURIComponent(search.trim())}`
    : category
      ? `${API}/products/category/${encodeURIComponent(category)}`
      : `${API}/products`;
  const data = await request(`${endpoint}${endpoint.includes('?') ? '&' : '?'}limit=0`, signal);
  let products = data.products || [];
  if (category && search.trim()) products = products.filter(p => p.category === category);
  if (minRating) products = products.filter(p => p.rating >= Number(minRating));
  products.sort((a, b) => {
    const av = a[sort] ?? '';
    const bv = b[sort] ?? '';
    const result = typeof av === 'number' && typeof bv === 'number' ? av - bv : String(av).localeCompare(String(bv));
    return order === 'desc' ? -result : result;
  });
  const total = products.length;
  const start = (page - 1) * limit;
  return { products: products.slice(start, start + limit), total, page, limit, totalPages: Math.max(1, Math.ceil(total / limit)) };
}

export async function getProductById(id, signal) {
  if (!/^\d+$/.test(String(id))) throw new Error('Invalid product ID. Please use a numeric ID.');
  return request(`${API}/products/${id}`, signal);
}

export async function getCategories(signal) {
  return request(`${API}/products/category-list`, signal);
}

export async function getAllProducts(signal) {
  const data = await request(`${API}/products?limit=0`, signal);
  return data.products || [];
}
