export let createDialog = (url: string, config: any): Promise<Window> => {
  return new Promise((resolve, reject) => {
    let windowProxy = window.open(url, '_blank', JSON.stringify(config)) as Window
    let readyHandler = (e: any) => {
      let msg = e.data
      if (msg['msgName'] === `__dialogReady`) {
        window.removeEventListener('message', readyHandler)
        // @ts-ignore
        resolve(windowProxy)
      }
    }

    window.addEventListener('message', readyHandler)
    windowProxy.addEventListener("close", () => {
      console.log("window close");
      windowProxy.removeEventListener("message", readyHandler);
    });
  })
}

export let dialogReady = () => {
  let msg = { msgName: `__dialogReady` }
  window.opener.postMessage(msg)
}