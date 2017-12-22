<template>
  <div class="picker">
    <p>您选择的是： {{slots[slotIdx].text}}</p>
    <moon-picker :slots="slots" :defaultIdx="defaultIdx" :callback="callback" @change="change"></moon-picker>
    <ul>
      <li v-for="item in 100">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slotIdx: 0,
      defaultIdx: 1,
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

<style scoped lang="scss">
.picker {
  background-color: #fff;
  padding-top: 10px;
  p {
    padding-left: 10px;
  }
}
</style>
