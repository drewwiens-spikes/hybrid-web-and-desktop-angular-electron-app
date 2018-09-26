import { app, BrowserWindow } from 'electron';
import { join } from 'path';

let win: BrowserWindow | undefined;

function showWindow() {

  function onClosed() {
    win = undefined;
    app.exit();
  }

  function createWindow() {
    win = new BrowserWindow({
      x: 0,
      y: 0,
      width: 640,
      height: 480,
      webPreferences: {
        preload: join(__dirname, 'bridge.js'),
        nodeIntegration: false,
        nodeIntegrationInWorker: false,
      },
    });
  }

  createWindow();
  win!.on('closed', onClosed);
  win!.loadURL('http://localhost:4200/');

}

app.on('ready', showWindow);
