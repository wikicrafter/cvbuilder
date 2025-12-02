const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

// Proper production detection - check if app is packaged
const isProduction = app.isPackaged;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        show: false,
        backgroundColor: '#143E72',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enablePreferredSizeMode: false,
            v8CacheOptions: 'code',
        },
    });

    // Production-ready path resolution
    let startURL;
    if (isProduction) {
        // In production (packaged app), load from resources
        const indexPath = path.join(process.resourcesPath, 'app.asar', 'build', 'index.html');
        startURL = url.format({
            pathname: indexPath,
            protocol: 'file:',
            slashes: true
        });
    } else {
        // In development, connect to dev server
        startURL = 'http://localhost:3000';
    }

    console.log('Production mode:', isProduction);
    console.log('Resources path:', process.resourcesPath);
    console.log('Loading URL:', startURL);

    mainWindow.loadURL(startURL);

    // Show window when ready
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // Error handling
    mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
        console.error('Failed to load:', errorDescription);
        console.error('Error code:', errorCode);

        // Fallback: try loading from alternative path
        if (isProduction) {
            const fallbackPath = path.join(__dirname, '..', 'build', 'index.html');
            console.log('Trying fallback path:', fallbackPath);
            mainWindow.loadFile(fallbackPath);
        }
    });

    // NEVER open DevTools in production
    if (!isProduction) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// Single instance lock
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
    app.quit();
} else {
    app.on('second-instance', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.focus();
        }
    });

    app.whenReady().then(createWindow);
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
