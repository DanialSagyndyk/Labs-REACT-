const API = 'https://fakestoreapi.com';
export async function getProducts({ signal } = {}) {
  const response = await fetch(`${API}/products`, { signal });
  if (!response.ok) throw new Error('Could not load products. Please try again.');
  return response.json();
}
export async function getProduct(id, { signal } = {}) {
  const response = await fetch(`${API}/products/${id}`, { signal });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error('Could not load this product.');
  return response.json();
}
