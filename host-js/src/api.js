const API_URL = 'http://localhost:3000';

export async function apiLogin(name) {
    console.log(name)
    const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name })
  });

  if (!res.ok) throw new Error('Login failed');
  return res.json(); // { token }
}

export async function getRecords() {
    const response = await fetch(`${API_URL}/records`);
    console.log(response);
    if (!response.ok) throw new Error('Get data failed');
    return response.json();
}
