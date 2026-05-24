const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

async function post(path, payload) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Request failed');
  }
  return data;
}

export function createCheckoutSession(priceKey) {
  return post('/api/stripe/create-checkout-session', { priceKey });
}

export function createPortalSession() {
  return post('/api/stripe/create-portal-session', {});
}
