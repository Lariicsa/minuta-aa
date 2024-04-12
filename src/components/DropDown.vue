<!-- @format -->

<script setup>
	const modelValue = defineModel();
	defineProps({
		disabledValueText: {
			type: String,
		},
	});

	function updateModel() {
		modelValue.value;
	}
</script>

<template>
	<div class="custom-select custom-select custom-select::after">
		<select
			v-model="updateModel"
			class="w-[54px] border border-b-1 border-t-0 border-l-0 border-r-0 text-[16px] text-blue indent-[4px] text-center">
			<option disabled value="">{{ disabledValueText }}></option>
			<option v-for="i in 31" :key="i" :value="i">{{ i }}</option>
		</select>
	</div>
</template>
