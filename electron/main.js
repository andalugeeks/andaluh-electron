const { app, BrowserWindow, screen, shell, Menu } = require('electron');
const path = require('path');
const {
  computedWidth,
  computedHeight,
  computedMaxWidth,
  computedMaxHeight
} = require('./lib/sizes');

const { registerShortcuts } = require('./lib/shortcuts');
require('dotenv').config();

const { minHeight, minWidth, title } = require('./app.config.json');
const { loadWindow } = require('./lib/utils');

const faviconPath = path.join(__dirname, '..', 'electron', 'static', 'favicon.png');
const buildPath = path.resolve(__dirname, '..', 'build', 'index.html');

let mainWindow;
const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: computedWidth(width),
    height: computedHeight(height),
    maxWidth: computedMaxWidth(width),
    maxHeight: computedMaxHeight(height),
    minHeight,
    minWidth,
    title,
    icon: faviconPath,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
    }
  });

  // This method load the index.html depends on enviroment
  // [production|development]
  // see lib/utils.js
  loadWindow(mainWindow, buildPath);
  // Open the default browser when user click in a link
  mainWindow.webContents.on('new-window', (e, url) => {
    e.preventDefault();
    shell.openExternal(url);
  });
};

// Start main process when app is ready
app.whenReady().then(() => {
  createWindow();
  Menu.setApplicationMenu(null);
  registerShortcuts();
});

// Quit app when all windows are closed
app.on('window-all-closed', () => {
  app.quit();
});

// Set name in the app bar
app.setName(title);
