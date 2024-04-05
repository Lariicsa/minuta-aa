<!-- @format -->

<script setup>
	import { ref } from "vue";
	const dateDay = ref(null);
	const dateMonth = ref(null);
	const dateYear = ref(null);
</script>
<template>
	<div class="flex w-full items-baseline flex-wrap">
		<p class="flex w-[178px] text-[16px] sm:text-[20px] font-normal">Ciudad Nezahualcóyotl</p>
		<div
			class="flex w-auto h-[36px] text-[16px] sm:text-[20px] justify-center items-end">
			<div class="flex w-auto items-end justify-start">
				<label>a</label>
				<input v-model="dateDay" type="number" class="w-[54px]" />
			</div>
			<div class="flex w-auto items-end justify-start">
				<label>de</label
				><input v-model="dateMonth" type="number" class="w-[108px]" />
			</div>

			<div class="flex w-auto items-end justify-start">
				<label>de 20</label>
				<input v-model="dateYear" type="number" class="w-[54px]" />
			</div>
		</div>
	</div>

	<div class="flex flex-col w-full items-start flex-wrap">
		<p class="flex w-auto text-[16px] sm:text-[20px] font-normal">
			Al pleno del Grupo México Nuevo Sol
		</p>
		<p class="flex w-auto text-[16px] sm:text-[20px] font-normal">Presente</p>
		<p class="text-[16px] font-normal">
			Por medio de la presente me dirijo a ustedes Compañeros, principalmente
			deseándoles que los frutos de la práctica de nuestro programa sean
			reflejados en cada uno de los ámbitos de su vida.
		</p>
		<div class="flex w-auto items-end justify-start flex-wrap">
			<label class="text-[16px] font-normal"
				>A continuación, se plasma el informe de</label
			>
			<input v-model="activity" type="number" class="w-[54px]" />

			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">de la semana del</label>
				<input v-model="activityDayStart" type="number" class="w-[54px]" />
			</div>

			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">al</label>
				<input v-model="activityDayEnd" type="number" class="w-[54px]" />
			</div>
			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">de</label>
				<input v-model="activityMonth" type="number" class="w-[80px]" />
			</div>
			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">de</label>
				<input v-model="activityYear" type="number" class="w-[54px]" />
			</div>
			:
		</div>

		<div class="flex w-auto items-end justify-start flex-wrap">
			<textarea
				v-model="activities"
				class="flex w-full h-[100px]"
				cols="30"
				rows="5"></textarea>
		</div>

		<a
			class="text-[16px] text-[#09f] print:hidden"
			href="javascript:window.print();"
			>Descargar</a
		>
	</div>
</template>
