import { app, BrowserWindow } from "electron";
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true"; // true: 不显示 electron 警告

let mainWindow: BrowserWindow;

app.whenReady().then(() => {
  let config = {
    webPreferences: {
      nodeIntegration: true, // 将 Node 环境集成到渲染进程中
      webSecurity: false,
      allowRunningInsecureContent: true,
      contextIsolation: false, // 在同一个JavaScript 上下文中使用 Electron API
      webviewTag: true,
      spellcheck: false,
      disableHtmlFullscreenWindowResize: true,
    }
  }
  mainWindow = new BrowserWindow(config)
  mainWindow.webContents.openDevTools({ mode: 'undocked' }) // 打开开发者调试工具
  mainWindow.loadURL(process.argv[2])
});