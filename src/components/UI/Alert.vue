<template>
  <v-alert :type="alertType" color="#64bc7f">
      {{ message }}
    </v-alert>
</template>

<script>
export default {
    props: {
        alertType : { type: String, required: true, default: "info"},
        message: { type: String, required: true, default: "alert message"}
    },
}
</script>

<style>

</style>