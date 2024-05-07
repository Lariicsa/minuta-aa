<!-- @format -->

<template>
	<select
		v-model="selectedOption"
		class="ml-[4px] w-[285px] border border-b-1 border-t-0 border-l-0 border-r-0 text-[16px] text-blue indent-[4px] text-center">
		<option disabled value="">Selecciona una actividad</option>
		<option
			v-for="activityOption in activitiesList"
			:key="activityOption"
			:value="activityOption">
			{{ activityOption }}
		</option>
	</select>
</template>

<script>
	export default {
		props: {
			value: {
				type: String,
				required: true,
			},
		},
		data() {
			return {
				selectedOption: "",
				activitiesList: [
					"Coordinador",
					"Tesorero",
					"Comité de Información Pública",
					"Comité de Información Pública",
					"Comité de Literatura",
					"Comité de Revista Plenitud",
					"Representante de Servicios Generales",
				],
			};
		},
	};
</script>
