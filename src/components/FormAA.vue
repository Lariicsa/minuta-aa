<!-- @format -->

<script setup>
	import { ref, computed } from "vue";
	import DropDown from "./DropDown.vue";
	const dateDay = ref(null);
	const dateMonth = ref(null);
	const dateYear = ref(null);
	const activityOption = ref(null);
	const activities = ref(null);
	const activityDayStart = ref(null);
	const activityDayEnd = ref(null);
	const activityMonth = ref(null);
	const activityYear = ref(null);

	const months = Array.from({ length: 12 }, (item, i) => {
		return new Date(0, i).toLocaleString("es-MX", { month: "long" });
	});

	const daysList = computed(() => {
		let x = undefined;
		for (let i = 1; i < 32; i++) {
			x = i;
		}
		return x;
	});

	const activitiesList = [
		"Coordinador",
		"Tesorero",
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
				<DropDown
					:modelValue="dateDay"
					disabledValueText="Selecciona un día"
					:itemsList="daysList" />
			</div>

			<div class="flex w-auto items-end justify-start">
				<label>de</label>
				<div class="custom-select custom-select custom-select::after">
					<DropDown
						:updateModel="dateMonth"
						:itemsList="months"
						disabledValueText="Selecciona un mes" />
				</div>
			</div>
			de 20
			<div class="flex w-auto items-end justify-start">
				<div class="custom-select custom-select custom-select::after">
					<select
						v-model="dateYear"
						class="w-[54px] border border-b-1 border-t-0 border-l-0 border-r-0 text-[16px] sm:text-[20px] text-blue indent-[4px] ml-[4px] text-center">
						<option disabled value="">Selecciona año</option>
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
			<div class="custom-select custom-select custom-select::after mt-[16px]">
				<select
					v-model="activityOption"
					class="ml-[4px] w-[285px] border border-b-1 border-t-0 border-l-0 border-r-0 text-[16px] text-blue indent-[4px] text-center">
					<option disabled value="">Selecciona una actividad</option>
					<option
						v-for="activityOption in activitiesList"
						:key="activityOption"
						:value="activityOption">
						{{ activityOption }}
					</option>
				</select>
			</div>

			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal leading-snug mt-[16px]"
					>de la semana del</label
				>
				<div class="custom-select custom-select custom-select::after">
					<select
						v-model="activityDayStart"
						class="w-[54px] border border-b-1 border-t-0 border-l-0 border-r-0 text-[16px] text-blue indent-[4px] text-center">
						<option disabled value="">Selecciona día de inicio</option>
						<option v-for="i in 31" :key="i" :value="i">{{ i }}</option>
					</select>
				</div>
			</div>

			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">al</label>
				<div class="custom-select custom-select custom-select::after">
					<select
						v-model="activityDayEnd"
						class="w-[54px] border border-b-1 border-t-0 border-l-0 border-r-0 text-[16px] text-blue indent-[4px] text-center">
						<option disabled value="">Selecciona día de término</option>
						<option v-for="i in 31" :key="i" :value="i">{{ i }}</option>
					</select>
				</div>
			</div>
			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">de</label>
				<div class="custom-select custom-select custom-select::after">
					<select
						v-model="activityMonth"
						class="ml-[4px] w-[98px] sm:w-[118px] border border-b-1 border-t-0 border-l-0 border-r-0 text-[16px] sm:text-[20px] text-center text-blue indent-[4px]">
						<option disabled value="">Selecciona un Mes</option>
						<option v-for="month in months" :key="month" :value="month">
							{{ month }}
						</option>
					</select>
				</div>
			</div>
			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal mt-[16px]">de</label>
				<div class="custom-select custom-select custom-select::after">
					<select
						v-model="activityYear"
						class="w-[54px] border border-b-1 border-t-0 border-l-0 border-r-0 text-[16px] text-blue indent-[4px] text-center">
						<option disabled value="">Selecciona año</option>
						<option v-for="i in 31" :key="i" :value="i">{{ i }}</option>
					</select>
				</div>
			</div>
		</div>
	</div>

	<div class="flex w-auto items-end justify-start flex-wrap mt-9">
		<textarea
			v-model="activities"
			class="flex w-[79vw] md:w-[72vw] md:max-w-[980px] h-[140px] md:h-[240px] rounded-lg p-[24px] border border-[#c1c1c1]"
			cols="30"
			rows="5"></textarea>
	</div>
	
	<div class="flex justify-start mt-6">
		<a
			class="text-[20px] text-blue print:hidden flex flex-col justify-center items-center bg-white border-blue border border-solid rounded-lg hover:bg-blue hover:text-white w-[308px] h-[40px] no-underline"
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
