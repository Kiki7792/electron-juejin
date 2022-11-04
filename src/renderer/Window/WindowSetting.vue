<template>
  <div class="windowSetting">
    <BarTop title="设置" />
    WindowSetting
  </div>
</template>

<script lang='ts' setup>
import BarTop from '../Component/BarTop.vue';
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
