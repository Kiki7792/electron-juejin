<template>
	<router-view />
</template>

<script lang="ts" setup>
const Database = require("better-sqlite3");
const db = new Database("db.db", { verbose: console.log, nativeBinding: "./node_modules/better-sqlite3/build/Release/better_sqlite3.node" });
console.log(db)
</script>

<style scoped>
</style>