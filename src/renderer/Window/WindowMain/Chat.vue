<template>
  <div class="chat">
    <ChatBoard />
    <MessageBoard />
  </div>
</template>

<script lang='ts' setup>
import ChatBoard from "./Chat/ChatBoard.vue";
import MessageBoard from "./Chat/MessageBoard.vue";
</script>
<style lang="scss" scoped>
.chat {
  display: flex;
  width: 100%;
}
</style>