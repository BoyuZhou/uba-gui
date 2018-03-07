import { BrowserWindow, app } from 'electron'

const createWindow = () => {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 500,
        center: true,
        resizable: false,
        alwaysOnTop: false,
        frame: false,
        titleBarStyle: 'hiddenInset',
        skipTaskbar: false
    });
    if (__isDev__) {
        win.loadURL('http://localhost:9000/index.html');
        // Open the DevTools.
        win.webContents.openDevTools();
    } else {
        win.loadURL(format({
            pathname: resolve(process.resourcesPath, 'app/renderer/index.html'),
            protocol: 'file:',
            slashes: true,
        }));
    }

    // Emitted when the window is closed.
    win.on('closed', () => {
        win = null;
    });
    return win;
}

export default createWindow;