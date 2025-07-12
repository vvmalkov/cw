const { renderLoginForm } = require("./auth");

const app = document.getElementById("app");

function init() {
  const token = localStorage.getItem('token');

  if (!token) {
    renderLoginForm(app, onLoginSuccess);
  } else {
    showMainMenu();
  }
}

function onLoginSuccess(token) {
  localStorage.setItem('token', token);
  showMainMenu();
}

function showMainMenu() {
  app.innerHTML = `
    <h1>Welcome to the Game</h1>
    <button id="play-lvl1">Play Level 1 (React)</button>
    <div id="game-container"></div>
  `;
}

init()