import { createApp } from "vue";
import './assets/style.css'
import './assets/icon/iconfont.css'
import App from "./App.vue";
import { router } from './router'
import pinia from './store'
import { ipcRenderer } from 'electron'

createApp(App).use(pinia).use(router).mount("#app");

/** get_title */
ipcRenderer.send('query_title')
ipcRenderer.on('get_title', (e: Electron.IpcRendererEvent, args: any) => {
  const style1 = 'color: #fff; background: #41b883; padding: 4px; border-radius: 4px;'
  const style2 = 'color: #fff; background: #409eff; padding: 4px 8px; border-radius: 4px;'
  console.log(`%c Hi! %c${args.name}@v${args.version}`, style1, style2)
})