<template>
  <div class="moon-picker">
    <div class="picker-box">
      <div class="picker-wraper" ref="pickerWraper">
        <div class="picker-item" :class="{ active: index == slotIdx}" v-for="(slot, index) in slots" :key="index">{{slot.text}}</div>
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
      slotIdx: 0,
      beginIdx: 0
    }
  },
  props: ['slots', 'defaultIdx', 'callback'],
  methods: {
    initDefaultIndx() {
      if(this.defaultIdx >= 0 && this.defaultIdx <= this.slots.length - 1) {
          this.beginIdx = this.defaultIdx;
      }
      this.slotIdx = this.beginIdx
      this.$emit('change', {slotIdx: this.beginIdx});
      this.translateY = this.itemHeigt - this.beginIdx * this.itemHeigt;
      this.$refs.pickerWraper.style.transform = "translate3d(0px, " + this.translateY + "px, 0px)"
    },
    initEvent() {
      this.$refs.pickerWraper.addEventListener('touchstart', this.pickerTouchStart);
      this.$refs.pickerWraper.addEventListener('touchmove', this.pickerTouchMove);
      this.$refs.pickerWraper.addEventListener('touchend', this.pickerTouchEnd);
    },
    pickerTouchStart(event) {
      event.stopPropagation();
      // record the drag init postion
      this.pageYStart = event.touches[0].pageY;
    },
    pickerTouchMove(event) {
      event.stopPropagation();
      //get drag distance
      let touchMove = event.touches[0].pageY - this.pageYStart;
      let traslateY = touchMove + this.translateY;
      //max positive and negative translate
      let maxPositiveTranstalte = this.itemHeigt;
      let maxNagativeTranstalte = -this.itemHeigt * (this.slots.length - 2);
      if (traslateY < maxNagativeTranstalte) {
        traslateY = maxNagativeTranstalte;
      }
      if (traslateY > maxPositiveTranstalte) {
        traslateY = maxPositiveTranstalte;
      }
      //drag the dom
      this.$refs.pickerWraper.style.transform = "translate3d(0px, " + traslateY + "px, 0px)"
    },
    pickerTouchEnd(event) {
      event.stopPropagation();
      // record the last translate
      let matrix  = this.$refs.pickerWraper.style.transform.replace(/[^0-9\-.,]/g, '').split(',');
      this.translateY = +matrix[1];
      this.translateY = (this.translateY <= 0) ? (this.translateY - this.itemHeigt/2) : (this.translateY + this.itemHeigt/2);
      let scale = Math.floor(Math.abs(this.translateY)/this.itemHeigt);
      scale = this.translateY >= 0 ? scale : -scale;
      this.$refs.pickerWraper.style.transform = "translate3d(0px, " + scale*this.itemHeigt + "px, 0px)"
      this.slotIdx = 1- scale;
      this.$emit('change', {slotIdx: this.slotIdx});
      this.callback();
    }
  },
  mounted: function() {
    this.initDefaultIndx();
    this.initEvent();
  }
}
</script>
<style scoped lang="scss">
.moon-picker {
  .picker-box {
    background: #eee;
    position: relative;
    overflow: hidden;
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
      color: #707274;
      .picker-item {
        line-height: 36px;
        text-align: center;
        &.active {
          color: #000;
        }
      }
    }
  }
}
</style>
