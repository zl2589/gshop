<template>
  <div>
   
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getShopInfo", () => {
      this.$nextTick(() => {

      })
    });
  },
};
</script>

<style lang="stylus">

</style>