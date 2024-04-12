<!-- @format -->

<script setup></script>
<template>
	<div
		class="flexx flex flex-col items-center justify-start min-h-screen p-[24px] relative">
		<div class="shadow-lg absolute inset-0 pointer-events-none"></div>
		<RouterView />
	</div>
</template>

<style>
	.flexx {
		max-width: 980px;
		margin: auto;
		border: 10px solid transparent;
		padding: 24px;
		background-color: #ffffff;
	}
</style>
