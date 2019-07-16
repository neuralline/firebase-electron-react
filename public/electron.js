const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

ipcMain.on("example", (event, arg) => {
  console.log(arg);
  event.sender.send("example", "pong");
});

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    frame: true,
    backgroundColor: "#151423"
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
