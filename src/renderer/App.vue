<template>
	<h1>hello electron hahaha</h1>
</template>

<style scoped>
.logo {
	padding: 1.5em;
	height: 6em;
	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<script setup lang="ts">
import fs from "fs";
import { ipcRenderer } from "electron";
import { onMounted } from "vue";

onMounted(() => {
	console.log(fs.writeFileSync);
	console.log(ipcRenderer);
});
</script>