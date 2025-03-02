<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
	console.log("window.wt", window.wt);
	if (window.wt) {
		window.wt.configureTheme({
			primaryColor: "green",
			fontFamily: "Inter",
		});
		window.wt.init();
	}
});

onUnmounted(() => {
  console.log('destroyed')
  window.wt.destroy();
})

</script>

<template>
	<div id="my-iframe-widget"></div>
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
