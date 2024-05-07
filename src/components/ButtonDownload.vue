<!-- @format -->

<template>
	<div class="flex justify-start mt-6">
		<a
			class="text-[20px] text-blue print:hidden flex flex-col justify-center items-center bg-white border-blue border border-solid rounded-lg hover:bg-blue hover:text-white w-[308px] h-[40px] no-underline"
			href="javascript:window.print();"
			>{{ buttonText }}</a
		>
	</div>
</template>

<script>
	export default {
		props: {
			buttonText: {
				type: String,
				default: "Descargar",
			},
		},
	};
</script>
