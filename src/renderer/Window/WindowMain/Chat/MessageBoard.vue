<template>
  <div class="MessageBoard">
    <BarTop />
    <!-- <div class="MessageList">{{ logInfo }}</div> -->
    <div class="MessageList">
      <MessageItem :data="item" v-for="item in messageStore.data" :key="item.id" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { storeToRefs } from 'pinia'
// import { ref, computed } from 'vue'
import BarTop from '../../../Component/BarTop.vue';
import MessageItem from './MessageItem.vue';
// import { ModelChat } from '../../../../model/ModelChat';
// import { useChatStore } from '../../../store/modules/useChatStore';

import { useMessageStore } from '../../../store/modules/useMessageStore'
let messageStore = useMessageStore()

// let chatStore = useChatStore()
// let curId = "";
// //订阅Store内数据的变化
// chatStore.$subscribe((mutations, state) => {
//   let item = state.data.find((v) => v.isSelected) as ModelChat;
//   if (item.id != curId) {
//     messageStore.initData(item);
//     curId = item.id;
//   }
// });

// import { useChatStore } from "../../../store/modules/useChatStore";
// let store = useChatStore();
// let logInfo = ref("");
// let curId = "";
// //订阅Store内数据的变化
// // store 数据发生变化就会 执行 $subscribe 提供的回调函数
// store.$subscribe((mutations, state) => {
//   let item = state.data.find((v) => v.isSelected);
//   let id = item?.id as string;
//   if (id != curId) {
//     logInfo.value = `现在应该加载ID为${item?.id}的聊天记录`;
//     curId = id;
//   }
// });

// way2
// const { data } = storeToRefs(store)
// const logInfo = computed(() => {
//   let item = data.value.find((v) => v.isSelected);
//   return `现在应该加载ID为${item?.id}的聊天记录`;
// })
</script>

<style lang="scss" scoped>
.MessageBoard {
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.MessageList {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgb(245, 245, 245);
}
</style>
