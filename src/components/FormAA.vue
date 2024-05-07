<!-- @format -->

<script setup>
	import { ref, computed } from "vue";
	import DropDown from "./DropDown.vue";
	import TextArea from "./TextArea.vue";
	import ButtonDownload from "./ButtonDownload.vue";
	import ActivitiesList from "./ActivitiesList.vue";

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

	const yearList = computed(() => {
		const result = [];
		for (let i = 25; i <= 35; i++) {
			result.push(i);
		}
		return result;
	});
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
					<DropDown
						:updateModel="dateYear"
						:itemsList="yearList"
						disabledValueText="Selecciona un año" />
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
				<!-- <select
					v-model="activityOption"
					class="ml-[4px] w-[285px] border border-b-1 border-t-0 border-l-0 border-r-0 text-[16px] text-blue indent-[4px] text-center">
					<option disabled value="">Selecciona una actividad</option>
					<option
						v-for="activityOption in activitiesList"
						:key="activityOption"
						:value="activityOption">
						{{ activityOption }}
					</option>
				</select> -->
				<ActivitiesList v-model="activityOption" />
			</div>

			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal leading-snug mt-[16px]"
					>de la semana del</label
				>

				<div class="flex w-auto items-end justify-start">
					<DropDown
						v-model="activityDayStart"
						:modelValue="dateDay"
						disabledValueText="Selecciona día de inicio"
						:itemsList="daysList" />
				</div>
			</div>

			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">al</label>
				<div class="flex w-auto items-end justify-start">
					<DropDown
						v-model="activityDayEnd"
						:modelValue="dateDay"
						disabledValueText="Selecciona día de termino"
						:itemsList="daysList" />
				</div>
			</div>
			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">de</label>
				<div class="flex w-auto items-end justify-start">
					<div class="custom-select custom-select custom-select::after">
						<DropDown
							v-model="activityMonth"
							:updateModel="dateMonth"
							:itemsList="months"
							disabledValueText="Selecciona un mes" />
					</div>
				</div>
			</div>
			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal mt-[16px]">de 20</label>
				<div class="custom-select custom-select custom-select::after">
					<DropDown
						v-model="activityYear"
						:updateModel="dateYear"
						:itemsList="yearList"
						disabledValueText="Selecciona un año" />
				</div>
			</div>
		</div>
	</div>

	<div class="flex w-auto items-end justify-start flex-wrap mt-9">
		<TextArea v-model="activities" :class="textareaClasses" />
	</div>

	<ButtonDownload />
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
