const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
  win.on('resize', () => {
    win.webContents.send('window-resized');
  });
});