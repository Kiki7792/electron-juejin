import { app, BrowserWindow, ipcMain } from 'electron'
import { CustomScheme } from './CustomScheme'
import { CommonWindowEvent } from './CommonWindowEvent'
import PKG from '../../package.json'

// 禁用當前應用程序的硬件加速
// app.disableHardwareAcceleration()

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true"; // true: 不显示 electron 警告

//* 每当有一个窗口被创建成功后，此事件就会被触发
app.on('browser-window-created', (e, win) => {
	CommonWindowEvent.regWinEvent(win)
})

let mainWindow: BrowserWindow;

app.whenReady().then(() => {
  monitorRenderer()
  createMainWindow()
});

function createMainWindow() {
  let config = {
    frame: true,
    autoHideMenuBar: false,
    show: false,
    movable: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      allowRunningInsecureContent: true,
      contextIsolation: false,
      webviewTag: true,
      spellcheck: false,
      disableHtmlFullscreenWindowResize: true,
    },
  };

  mainWindow = new BrowserWindow(config);
  mainWindow.setMenu(null)

  mainWindow.webContents.openDevTools({ mode: "undocked" });

  if (process.argv[2]) {
    mainWindow.loadURL(process.argv[2]);
  } else {
    CustomScheme.registerScheme();
    mainWindow.loadURL(`app://index.html`);
  }
  CommonWindowEvent.listen();

  mainWindow.on('ready-to-show', () => {
    showMainWindow()
  })
}

//* 显示 主窗口（main-render）
function showMainWindow() {
  if (!mainWindow) return
  mainWindow.show()
}

//* 监听渲染进程
function monitorRenderer() {
  // 获取应用标题
  ipcMain.on('query_title', () => {
    mainWindow && mainWindow.webContents.send('get_title', { name: PKG.name, version: PKG.version })
  })
}