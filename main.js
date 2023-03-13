const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('https://google.com')
}

app.whenReady().then(() => {
  createWindow()
})
