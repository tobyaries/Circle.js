<template>
  <div class="infinite-scroll">
    <moon-infinite-scroll :triggerDistance='100' :scrollDisabled='loading' :scrollFn="loadMore">
      <li v-for="(item, index) in songList" :key=index>
        {{item.name}}
      </li>
    </moon-infinite-scroll>
    <div class="no-more" v-show="!noContent && noMore">已全部加载完成～</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      songList: [],
      loading: false,
      size: 50,
      page: 1,
      noMore: false,
      noContent: false,
      url: 'https://music-api-jwzcyzizya.now.sh/api/search/song/netease',
      key: encodeURIComponent('周杰伦')

    }
  },
  methods: {
    loadMore () {
      if (this.noMore) return
      this.loading = true
      this.$ajax.get(`${this.url}?key=${this.key}&limit=${this.size}&page=${++this.page}`)
      .then(res => {
        if (res.data.songList.length === 0) {
          this.noMore = true
        } else {
          this.songList.push(...res.data.songList)
          this.loading = false
        }
      })
    },
    getData () {
      this.$ajax.get(`${this.url}?key=${this.key}&limit=${this.size}&page=${this.page}`)
      .then(res => {
        if (res.data.songList.length === 0) {
          this.noContent = true
        } else {  
          this.songList = res.data.songList
          this.noContent = false
        }
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
</style>

