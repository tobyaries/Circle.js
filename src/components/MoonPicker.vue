<template>
  <div class="moon-picker">
    <div class="picker-box">
      <div class="picker-wraper" ref="pickerWraper">
        <div class="picker-item" v-for="(slot, index) in slots" :key="index">{{slot}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () { 
    return {
      pageYStart: 0,
      translateY: 0,
      itemHeigt: 36,
      slots: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  props: [],
  methods: {
    initEvent() {
      this.$refs.pickerWraper.style.transform = "translate3d(0px, " + this.itemHeigt + "px, 0px)"
      this.$refs.pickerWraper.addEventListener('touchstart', this.pickerTouchStart);
      this.$refs.pickerWraper.addEventListener('touchmove', this.pickerTouchMove);
      this.$refs.pickerWraper.addEventListener('touchend', this.pickerTouchEnd);
    },
    pickerTouchStart(event) {
      // record the drag init postion
      this.pageYStart = event.touches[0].pageY;
    },
    pickerTouchMove(event) {
      event.stopPropagation();
      //get drag distance
      let touchMove = event.touches[0].pageY - this.pageYStart;
      let traslateY = touchMove + this.translateY;
      if (traslateY < 0 && Math.abs(traslateY) > this.itemHeigt * (this.slots.length - 2)) {
        traslateY = -this.itemHeigt * (this.slots.length - 2);
      }
      if (traslateY > 0 && traslateY > this.itemHeigt) {
        traslateY = this.itemHeigt;
      }
      //drag the dom
      this.$refs.pickerWraper.style.transform = "translate3d(0px, " + traslateY + "px, 0px)"
    },
    pickerTouchEnd(event) {
      // record the last translate
      this.translateY = +this.$refs.pickerWraper.style.transform.replace(/[^0-9\-,]/g,'').split(',')[1];
      let scale = Math.floor(Math.abs(this.translateY)/this.itemHeigt);
      scale = this.translateY > 0 ? scale : -scale;
      this.translateY = scale*this.itemHeigt;
      this.$refs.pickerWraper.style.transform = "translate3d(0px, " + scale*this.itemHeigt + "px, 0px)"
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
