const { renderLoginForm } = require("./auth");
const { renderRecordTable } = require("./records");

const app = document.getElementById("app");
const recordsTable = document.getElementById("recordsTable");

function init() {
  const token = localStorage.getItem('token');

  if (!token) {
    renderLoginForm(app, onLoginSuccess);
    renderRecordTable(recordsTable);
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
  const playBtnReact = document.getElementById("play-lvl1");
  playBtnReact.onclick = async () => {
    const container = document.getElementById("game-container");
    container.innerHTML = "<div>Loading react</div>";
    try {
      const level1appmodule = await import("level1/level1-react");
      console.log(level1appmodule);
      const level1app = level1appmodule.default;
      const React = await import("react");
      const { createRoot } = await import('react-dom/client');
      createRoot(container).render(React.createElement(level1app));
    } catch (error) {
      container.innerHTML = '<div style="color:red">Ошибка загрузки React-приложения</div>';
      console.error(error);
    }
  }
}

init()