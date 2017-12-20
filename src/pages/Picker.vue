<template>
  <div class="picker">
    <moon-picker :slots="slots" @change="change"></moon-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
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
      console.log(data, 888888)
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
