<template>
  <div class="windowSetting">
    <BarTop title="设置" />
    WindowSetting
  </div>
</template>

<script lang='ts' setup>
import { onMounted, onUnmounted } from 'vue';
import BarTop from '../Component/BarTop.vue';
import { dialogReady } from '../Common/Dialog';

let msgHandler = (e: any) => {
  console.log(e.data);
  window.opener.postMessage({ msgName: "hello", value: "I am your son." });
}

onMounted(() => {
  console.log("ready", Date.now());
  window.addEventListener("message", msgHandler);
  
  // 只有子窗口 ready 之后，父子窗口才能通信
  dialogReady()
})

onUnmounted(() => {
  window.removeEventListener('message', msgHandler)
})
</script>
<style lang="scss" scoped>
.windowSetting {
  width: 100%;
  box-sizing: border-box;
  box-shadow: 10px 10px 10px inset red;
  .topBar {
    background-color: red;
  }
}
</style>
