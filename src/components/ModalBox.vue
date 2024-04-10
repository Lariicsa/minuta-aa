<!-- @format -->

<script setup>
	import { computed, onMounted, onUnmounted, watch, defineEmits } from "vue";

	const props = defineProps({
		show: {
			type: Boolean,
			default: false,
		},
		maxWidth: {
			type: String,
			default: "2xl",
		},
		closeable: {
			type: Boolean,
			default: true,
		},
	});

	const emit = defineEmits(["close"]);

	watch(
		() => props.show,
		() => {
			if (props.show) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = null;
			}
		}
	);

	const close = () => {
		if (props.closeable) {
			emit("close");
		}
	};

	const closeOnEscape = (e) => {
		if (e.key === "Escape" && props.show) {
			close();
		}
	};

	onMounted(() => document.addEventListener("keydown", closeOnEscape));

	onUnmounted(() => {
		document.removeEventListener("keydown", closeOnEscape);
		document.body.style.overflow = null;
	});

	const maxWidthClass = computed(() => {
		return {
			sm: "sm:max-w-sm",
			md: "sm:max-w-md",
			lg: "sm:max-w-lg",
			xl: "sm:max-w-xl",
			"2xl": "sm:max-w-2xl",
		}[props.maxWidth];
	});
</script>

<template>
	<teleport to="body">
		<transition leave-active-class="duration-200">
			<div
				id="staticModal"
				data-modal-backdrop="static"
				tabindex="-1"
				aria-hidden="true"
				v-show="show"
				class="fixed inset-0 z-50 overflow-y-auto pt-4 sm:px-0"
				scroll-region>
				<transition
					enter-active-class="ease-out duration-300"
					enter-from-class="opacity-0"
					enter-to-class="opacity-100"
					leave-active-class="ease-in duration-200"
					leave-from-class="opacity-100"
					leave-to-class="opacity-0">
					<div class="fixed inset-0 transform transition-all" @click="close">
						<div class="absolute inset-0 bg-black opacity-75"></div>
					</div>
				</transition>

				<transition
					enter-active-class="ease-out duration-300"
					enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					enter-to-class="opacity-100 translate-y-0 sm:scale-100"
					leave-active-class="ease-in duration-200"
					leave-from-class="opacity-100 translate-y-0 sm:scale-100"
					leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
					<div
						@click="close"
						v-show="show"
						class="relative mb-0 transform overflow-hidden shadow-xl transition-all bg-black sm:mx-auto sm:w-full"
						:class="maxWidthClass">
						<span
							@click="close"
							class="absolute w-auto top-[24px] left-[24px] sm:cursor-pointer">
							<svg
								width="33"
								height="22"
								viewBox="0 0 33 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0.34468 10.5585C-0.0939584 10.9555 -0.0939582 11.6444 0.34468 12.0414L10.9151 21.6079C11.7144 22.3313 12.9349 21.4522 12.502 20.4649L9.21251 12.9627H32C32.5523 12.9627 33 12.515 33 11.9627V10.637C33 10.0847 32.5523 9.63695 32 9.63695H9.21257L12.502 2.135C12.9348 1.14773 11.7144 0.268636 10.9151 0.991995L0.34468 10.5585Z"
									fill="#2B3784" />
							</svg>
						</span>
						<slot v-if="show" />
					</div>
				</transition>
			</div>
		</transition>
	</teleport>
</template>
