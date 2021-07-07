<template>
<div class="star-score">
  <div class="star" :class="'star-' + size">
    <div
      class="star-item"
      v-for="(star, index) in starClasses"
      :class="star"
      :key="index"
    ></div>
    
  </div>
  <div class="rating_section">{{score}}</div>
</div>
</template>

<script>
const CLASS_ON = "on";
const CLASS_HALF = "half";
const CLASS_OFF = "off";

export default {
  props: {
    score: Number,
    size: Number,
  },
  computed: {
    starClasses() {
      const { score } = this;
      const scArr = [];
      // 向scArr中添加 n个'on'
      // 向scArr中添加 0/1个'half'
      // 向scArr中添加 n个'off'
      const scoreInt = Math.floor(score);
      for (let i = 0; i < scoreInt; i++) {
        scArr.push(CLASS_ON);
      }

      if ((score - scoreInt) * 10 >= 5) {
        scArr.push(CLASS_HALF);
      }

      while (scArr.length < 5) {
        scArr.push(CLASS_OFF);
      }
      return scArr;
    },
  },
};
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';
.star-score {
    display flex
    justify-content space-around
}
.star {
  color: #ff9a0d;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      // margin-right 3px
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./stars/star24_on');
      }

      &.half {
        bg-image('./stars/star24_half');
      }

      &.off {
        bg-image('./stars/star24_off');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./stars/star36_on');
      }

      &.half {
        bg-image('./stars/star36_half');
      }

      &.off {
        bg-image('./stars/star36_off');
      }
    }
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./stars/star48_on');
      }

      &.half {
        bg-image('./stars/star48_half');
      }

      &.off {
        bg-image('./stars/star48_off');
      }
    }
  }
}

.rating_section {
  float: left;
  font-size: 10px;
  color: #ff6000;
  margin-left: 4px;
}
</style>