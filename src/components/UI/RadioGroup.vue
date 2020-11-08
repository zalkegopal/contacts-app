<template>
  <v-container class="mx-auto">
      <v-radio-group v-model="radioSelected" row class="radio-group">
        <v-radio :key="1" label="A-Z" :value="1"></v-radio>
        <v-radio :key="2" label="Z-A" :value="2"></v-radio>
      </v-radio-group>
  </v-container>
</template>

<script>
export default {
  name: "RadioGroup",

  data: () => {
    return {
      radioSelected: 1,
    };
  },
  props: {
    radioChanged: { type: Function, required: true, default: () => {} },
  },
  watch: {
    radioSelected(newValue) {
      this.$props.radioChanged(newValue);
    },
  },
};
</script>
<style scoped>
.radio-group {
  width: 60%;
  margin: 0 40%;
  height: 50px;
  justify-content: center;
}
</style>
