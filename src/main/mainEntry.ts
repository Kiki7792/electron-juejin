import { app, BrowserWindow } from "electron";
import { CustomScheme } from './CustomScheme'
import { CommonWindowEvent } from './CommonWindowEvent'

// 禁用當前應用程序的硬件加速
// app.disableHardwareAcceleration()

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true"; // true: 不显示 electron 警告

//* 每当有一个窗口被创建成功后，此事件就会被触发
app.on('browser-window-created', (e, win) => {
	CommonWindowEvent.regWinEvent(win)
})

let mainWindow: BrowserWindow;

app.whenReady().then(() => {
  let config = {
    frame: false,
    show: false,
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

  mainWindow.webContents.openDevTools({ mode: "undocked" });

  if (process.argv[2]) {
    mainWindow.loadURL(process.argv[2]);
  } else {
    CustomScheme.registerScheme();
    mainWindow.loadURL(`app://index.html`);
  }
  CommonWindowEvent.listen();
});