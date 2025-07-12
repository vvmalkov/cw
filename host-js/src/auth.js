import { apiLogin } from "./api";

export function renderLoginForm(container, onSuccess) {
  container.innerHTML = `
    <div class="card p-4 shadow-sm w-50 mx-auto mt-5">
      <h2 class="mb-3 text-center">Login</h2>
      <input id="login" class="form-control mb-2" placeholder="Enter your name" />
      <button id="submit" class="btn btn-primary w-100">Start Game</button>
    </div>
  `;
  document.getElementById('submit').onclick = async () => {
    const login = document.getElementById('login').value.trim();
    if (!login) return alert('Enter a name');
    
    try {
      const { token } = await apiLogin(login);
      onSuccess(token); // сохраняет токен и вызывает showMainMenu
    } catch (err) {
      alert('Login failed');
    }
  };
}