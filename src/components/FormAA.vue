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
        Ciudad Nezahualcóyotl <strong class="text-blue font-bold">{{ dateDay }} - {{dateMonth  }}</strong>
      </div>
    </div>

    <div class="flex w-auto h-[36px] text-[16px] sm:text-[20px] justify-center items-end">
      <div class="flex w-auto items-end justify-start">
        <div class="custom-select custom-select custom-select::after">
					<label>a</label>
          <select v-model="dateDay" type="number">
            <option v-for="i in 32" :key="i" :value="i">{{ i }}</option>
          </select>
        </div>
      </div>

      <div class="flex w-auto items-end justify-start">
        <label>de</label>
        <input v-model="dateMonth" type="text" class="w-[54px] border border-b-1 border-t-0 border-l-0 border-r-0" />
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
			class="text-[20px] text-blue print:hidden flex flex-col justify-center items-center bg-white border-blue border border-solid rounded-lg hover:bg-blue hover:text-white w-[326px] h-[40px] decoration-0"
			href="javascript:window.print();"
			>Descargar</a
		>
	</div>
</template>



st