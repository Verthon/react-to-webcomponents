<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

//@ts-expect-error race condition here the web-component is not ready yet
window.wt.configureTheme({ colors: { primary: "red" } });
</script>

<template>
	<HelloWorld msg="Vite + Vue" />
	<react-app></react-app>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
