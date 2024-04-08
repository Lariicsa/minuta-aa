<!-- @format -->

<script setup>
	import { ref } from "vue";
	import LogoAA from "@/components/LogoAA.vue";
	import FormAA from "@/components/FormAA.vue";

	const showBox = ref(false);

	const showPreview = () => {
		showBox.value = true;
	};
	const closePreview = ()=>{
		showBox.value = false
	}
</script>

<template>
	<LogoAA />
	<FormAA :showModal="showBox"/>

	<button @click="showPreview" @closeModal="closePreview">Visualizar</button>
</template>

<style>
	html {
		scroll-behavior: smooth;
		font-family: Montserrat, Arial, Helvetica, sans-serif;
	}
</style>
