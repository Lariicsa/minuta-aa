<!-- @format -->

<script setup>
	import { onMounted, ref } from "vue";
	const dateDay = ref(null);
	const dateMonth = ref(null);
	const dateYear = ref(null);
	const activity = ref(null);
	const activities = ref(null);
	const activityDayStart = ref(null);
	const activityDayEnd = ref(null);
	const activityMonth = ref(null);
	const activityYear = ref(null);

	const months = Array.from({ length: 12 }, (item, i) => {
		return new Date(0, i).toLocaleString("es-US", { month: "long" });
	});

	const activitiesList = [
		"Comité de Información Pública",
		"Comité de Información Pública",
		"Comité de Literatura",
		"Comité de Revista Plenitud",
		"Representante de Servicios Generales",
	];
</script>
<template>
	<div class="flex w-full items-baseline flex-wrap justify-end">
		<div class="flex w-full items-baseline justify-end mb-2">
			<div class="w-[178px] text-[16px] sm:text-[20px] font-normal">
				Ciudad Nezahualcóyotl
			</div>
		</div>

		<div
			class="flex w-auto h-[36px] text-[16px] sm:text-[20px] justify-center items-end">
			<div class="flex w-auto items-end justify-start">
				<div class="custom-select custom-select custom-select::after">
					<select
						v-model="dateDay"
						class="w-[54px] border border-b-1 border-t-0 border-l-0 border-r-0 text-[16px] text-blue">
						<option disabled value="">Selecciona un día</option>
						<option v-for="i in 31" :key="i" :value="i">{{ i }}</option>
					</select>
				</div>
			</div>

			<div class="flex w-auto items-end justify-start">
				<label>de</label>
				<div class="custom-select custom-select custom-select::after">
					<select
						v-model="dateMonth"
						class="w-[54px] border border-b-1 border-t-0 border-l-0 border-r-0">
						<option disabled value="">Selecciona un día</option>
						<option v-for="month in months" :key="month" :value="month">
							{{ month }}
						</option>
					</select>
				</div>
			</div>
			de
			<div class="flex w-auto items-end justify-start">
				<div class="custom-select custom-select custom-select::after">
					<select
						v-model="dateYear"
						class="w-[54px] border border-b-1 border-t-0 border-l-0 border-r-0">
						<option disabled value="">Selecciona un día</option>
						<option v-for="i in 40" :key="i" :value="i">{{ i }}</option>
					</select>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-col w-full items-start flex-wrap">
		<p class="flex w-auto text-[16px] sm:text-[20px] font-normal">
			Al pleno del Grupo México Nuevo Sol
		</p>
		<p class="flex w-auto text-[16px] sm:text-[20px] font-normal">Presente</p>
		<p class="text-[16px] font-normal leading-snug">
			Por medio de la presente me dirijo a ustedes Compañeros, principalmente
			deseándoles que los frutos de la práctica de nuestro programa sean
			reflejados en cada uno de los ámbitos de su vida.
		</p>
		<div class="flex w-auto items-end justify-start flex-wrap">
			<label class="text-[16px] font-normal leading-snug"
				>A continuación, se plasma el informe de</label
			>
			<div class="custom-select custom-select custom-select::after">
				<select
					v-model="acitvity"
					class="w-[54px] border border-b-1 border-t-0 border-l-0 border-r-0">
					<option disabled value="">Selecciona un día</option>
					<option
						v-for="activity in activitiesList"
						:key="activity"
						:value="activity">
						{{ activity }}
					</option>
				</select>
			</div>

			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal leading-snug">de la semana del</label>
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
				<input
					v-model="activityYear"
					type="number"
					class="w-[54px] border border-b-1 border-t-0 border-l-0 border-r-0" />
			</div>
		</div>
	</div>

	<div class="flex w-auto items-end justify-start flex-wrap mt-9">
		<textarea
			v-model="activities"
			class="flex w-[326px] h-[140px]"
			cols="30"
			rows="5"></textarea>
	</div>
	<div class="flex justify-start mt-6">
		<a
			class="text-[20px] text-blue print:hidden flex flex-col justify-center items-center bg-white border-blue border border-solid rounded-lg hover:bg-blue hover:text-white w-[326px] h-[40px] no-underline"
			href="javascript:window.print();"
			>Descargar</a
		>
	</div>
</template>

<style>
	select {
		/* for Firefox */
		-moz-appearance: none;
		/* for Safari, Chrome, Opera */
		-webkit-appearance: none;
	}

	/* for IE10 */
	select::-ms-expand {
		display: none;
	}
</style>
