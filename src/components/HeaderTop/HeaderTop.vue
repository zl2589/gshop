<template>
  <header class="header">
    <slot name="search"></slot>
    <location/>
    <a class="log-reg">
      <slot name="login"></slot>
      <slot name="regist"></slot>
    </a>
  </header>
</template>

<script>
import Location from '@/components/Location/Location'

export default {
  name: "HeaderTop",
  components: {
    Location
  }
  
};
</script>

<style lang="stylus">
.header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    color: #fff;
  }

  .header-search {
    i {
      font-size: 18px;
    }
  }

  .log-reg {
    a {
      font-size: 14px;
    }

    a:nth-child(1) {
      display: inline;
      padding-right: 6px;
    }

    a:nth-child(2) {
      display: inline;
      border-left: 1px solid #fff;
      padding-left: 8px;
    }
  }
}
</style>