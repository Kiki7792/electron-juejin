<template>
  <div class="windowSetting">
    <BarTop title="设置" />
    WindowSetting
  </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue';
import BarTop from '../Component/BarTop.vue';
import { dialogReady } from '../common/Dialog';

onMounted(() => {
  console.log("ready", Date.now());
  window.addEventListener("message", (e) => {
    console.log(e.data);
    window.opener.postMessage({ msgName: "hello", value: "I am your son." });
  });
  // 只有子窗口 ready 之后，父子窗口才能通信
  dialogReady()
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
