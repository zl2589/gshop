<template>
  <div>
    
  </div>
</template>

<script>

export default {
  mounted() {
    this.$store.dispatch("getShopRatings", () => {
      this.$nextTick(() => {});
    });
  },
  computed: {
  }
};
</script>

<style lang="stylus">

</style>