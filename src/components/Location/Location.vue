<template>
  <div style="width: 50%">
    <div id="map-container" style="display: none"></div>
    <div class="address">{{ address }}</div>
  </div>
</template>

<script>
import { location } from "../../common/js/Location";

export default {
  name: "Location",
  data() {
    return {
      address: "",
    };
  },
  mounted() {
    this.getLocation(); // 调用地理位置函数
  },
  methods: {
    getLocation() {
      let _that = this;
      let geolocation = location.initMap("map-container"); //定位
      AMap.event.addListener(geolocation, "complete", (result) => {
        console.log(result.addressComponent);
        _that.lat = result.position.lat;
        _that.lng = result.position.lng;
        _that.province = result.addressComponent.province;
        _that.city = result.addressComponent.city;
        _that.district = result.addressComponent.district;
        _that.street = result.addressComponent.street;
        _that.township = result.addressComponent.township;
        _that.neighborhood = result.addressComponent.neighborhood;

        this.address =
          _that.city +
          "" +
          _that.district +
          "" +
        //   _that.street +
          "" +
          _that.township +
          "" +
          _that.neighborhood;
      });
    },
  },
};
</script>

<style lang="stylus">
.address {
    width: 100%;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color #fff
    letter-spacing 1px
}
</style>