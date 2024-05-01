<!-- @format -->

<template>
  <textarea
    v-model="activities"
    class="flex w-[79vw] md:w-[72vw] md:max-w-[920px] h-[140px] md:h-[240px] rounded-lg p-[20px] border border-[#c1c1c1]"
    cols="30"
    rows="5"
  ></textarea>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
     

    }
  }
}
</script>

