<!-- @format -->

<script setup>
	import { ref } from "vue";
	const dateDay = ref(null);
	const dateMonth = ref(null);
	const dateYear = ref(null);
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
					<label>a</label>
					<input
						v-model="dateDay"
						type="number"
						class="text-[16px] text-blue font-semibold w-[36.01px] border border-b-1 border-t-0 border-l-0 border-r-0" />
				</div>
			</div>

			<div class="flex w-auto items-end justify-start">
				<label>de</label>
				<select
					v-model="dateMonth"
					type="String"
					class="text-blue justify-center border border-b-1 border-t-0 border-l-0 border-r-0">
					<option value="">Mes</option>
					<option value="Enero">Enero</option>
					<option value="Febrero">Febrero</option>
					<option value="Marzo">Marzo</option>
					<option value="Abril">Abril</option>
					<option value="Mayo">Mayo</option>
					<option value="Junio">Junio</option>
					<option value="Julio">Julio</option>
					<option value="Agosto">Agosto</option>
					<option value="Septiembre">Septiembre</option>
					<option value="Octubre">Octubre</option>
					<option value="Noviembre">Noviembre</option>
					<option value="Diciembre">Diciembre</option>
				</select>
			</div>

			<div class="flex w-auto items-end justify-start">
				<label>de 20</label>
				<input
					v-model="dateYear"
					type="number"
					class="text-[16px] text-blue font-semibold w-[36px] border border-b-1 border-t-0 border-l-0 border-r-0" />
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
			<select
				v-model="activity"
				type="String"
				class="text-blue justify-center border border-b-1 border-t-0 border-l-0 border-r-0">
				<option value="">Actividad</option>
				<option value="Actividad1">Actividad 1</option>
				<option value="Actividad2">Actividad 2</option>
				<option value="Actividad3">Actividad 3</option>
			</select>
			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">de la semana del</label>
				<input
					v-model="activityDayStart"
					type="number"
					class="text-[16px] text-blue font-semibold w-[36.01px] justify-center border border-b-1 border-t-0 border-l-0 border-r-0" />
			</div>

			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">al</label>
				<input
					v-model="activityDayEnd"
					type="number"
					class="text-[16px] text-blue font-semibold w-[36.01px] text-blue justify-center border border-b-1 border-t-0 border-l-0 border-r-0" />
			</div>
			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">de</label>
				<select
					v-model="dateMonth"
					type="String"
					class="text-blue justify-center border border-b-1 border-t-0 border-l-0 border-r-0">
					<option value="">Mes</option>
					<option value="Enero">Enero</option>
					<option value="Febrero">Febrero</option>
					<option value="Marzo">Marzo</option>
					<option value="Abril">Abril</option>
					<option value="Mayo">Mayo</option>
					<option value="Junio">Junio</option>
					<option value="Julio">Julio</option>
					<option value="Agosto">Agosto</option>
					<option value="Septiembre">Septiembre</option>
					<option value="Octubre">Octubre</option>
					<option value="Noviembre">Noviembre</option>
					<option value="Diciembre">Diciembre</option>
				</select>
			</div>
			<div class="flex w-auto items-end justify-start">
				<label class="text-[16px] font-normal">de 20</label>
				<input
					v-model="activityYear"
					type="number"
					class="text-[16px] text-blue font-semibold w-[36.01px] text-blue justify-center border border-b-1 border-t-0 border-l-0 border-r-0" />
			</div>
		</div>
	</div>

	<div class="flex w-auto items-end justify-start flex-wrap mt-9">
		<textarea
			v-model="activities"
			class="flex w-[326px] h-[140px] md:w-[790px] md:h-[240px]"
			cols="30"
			rows="5"></textarea>
	</div>
	<div class="flex justify-start mt-6">
		<a
			class="text-[20px] text-blue print:hidden flex flex-col justify-center items-center bg-white border-blue border border-solid rounded-lg hover:bg-blue hover:text-white w-[326px] h-[40px] decoration-0"
			href="javascript:window.print();"
			>Descargar</a
		>
	</div>
</template>
