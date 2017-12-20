<template>
  <div class="picker">
    <p>您选择的是： {{slots[slotIdx].text}}</p>
    <moon-picker :slots="slots" :callback="callback" @change="change"></moon-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slotIdx: 0,
      slots: [
        {
          text: '烟花易冷',
          value: 'yhyl'
        },
        {
          text: '稻香',
          value: 'dx'
        },
        {
          text: '夜曲',
          value: 'yq'
        },
        {
          text: '蒲公英的约定',
          value: 'pgydyd'
        },
        {
          text: '半岛铁盒',
          value: 'bdth'
        },
         {
          text: '世界末日',
          value: 'sjmr'
        },
         {
          text: '七里香',
          value: 'qlx'
        },
         {
          text: '回到过去',
          value: 'hdgq'
        }
      ]
    }
  },
  methods: {
    change(data) {
      this.slotIdx = data.slotIdx;
      console.log(data.slotIdx)
    },
    callback() {
      console.log('callback is called.')
    }
  }
}
</script>

<style>
.picker {
  background-color: #fff;
  padding-top: 200px;
}
</style>
