<template>
	<BarLeft />
	<div class="pageBox">
		<router-view />
	</div>
</template>

<script setup lang="ts">
import BarLeft from './Component/BarLeft.vue';
</script>

<style scoped>
</style>