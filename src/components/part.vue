<template>
  <div class="part">
    <p>this is part</p>
    <button @click="back">back button</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      back() {
          this.$router.back();
      }
  }
};
</script>
<style lang="less">
@import "../assets/style/common.less";
</style>
