<!-- @format -->

<script setup>
	defineProps({
		content: {
			type: String,
		},
	});
</script>
<template>
	<div class="larDocgen">
		<div class="larDocgen__watermark"></div>
		<div class="larDocgen__advertise">· calaveritamaker.com ·</div>
		<a class="larDocgen__icon" href="javascript:window.print();"></a>
		<div class="larDocgen__content">
			<p class="larDocgen__text" v-html="content"></p>
		</div>
	</div>
</template>
