import * as electron from 'electron'
const { app, BrowserWindow } = electron

app.whenReady().then(() => {
   createWindow()
})

app.on("window-all-closed", () => {
  if (process.platform === "darwin") {
    app.quit();
  }
})

app.on("activate", () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时, 通常在应用程序中重新创建一个窗口
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile("index.html").then();
  win.webContents.openDevTools();
}
