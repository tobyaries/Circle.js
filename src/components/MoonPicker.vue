<template>
  <div class="moon-picker">
    <div class="picker-box">
      <div class="picker-wraper">
        <div class="picker-item" v-for="(slot, index) in slots" :key="index">{{slot}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () { 
    return {
      $pickerWraper: '',
      pageYStart: 0,
      translateY: 0,
      slots: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  props: [],
  methods: {
    initEvent() {
      this.$pickerWraper = document.querySelector('.picker-wraper');
      this.$pickerWraper.addEventListener('touchstart', this.pickerTouchStart);
      this.$pickerWraper.addEventListener('touchmove', this.pickerTouchMove);
      this.$pickerWraper.addEventListener('touchend', this.pickerTouchEnd);
    },
    pickerTouchStart(event) {
      // record the dtag init postion
      this.pageYStart = event.touches[0].pageY;
      console.log(event.touches[0].pageY, 111111111111111)
    },
    pickerTouchMove(event) {
      event.stopPropagation();
      let $pickerWraper = document.querySelector('.picker-wraper');
      let pageYMove = event.touches[0].pageY - this.pageYStart + this.translateY;
      this.$pickerWraper.style.transform = "translate3d(0px, " + pageYMove + "px, 0px)"
      console.log(event.touches[0].pageY, pageYMove, 222222222)
    },
    pickerTouchEnd(event) {
      // this.pageYStart = event.touches[0].pageY
      this.translateY = +this.$pickerWraper.style.transform.replace(/[^0-9\-,]/g,'').split(',')[1];
    }
  },
  mounted: function() {
    this.initEvent();
  }
}
</script>
<style scoped lang="scss">
.moon-picker {
  .picker-box {
    background: #eee;
    position: relative;
    &::before, &::after{
      content: '';
      height: 1px;
      background-color: #ccc;
      position: absolute;
      width: 100%;
    }
     &::before{
      top: 36px;
    }
    &::after{
      top: 72px;
    }
    .picker-wraper {
      position: relative;
      height: 108px;
      .picker-item {
        line-height: 36px;
        text-align: center;
      }
    }
  }
}
</style>
