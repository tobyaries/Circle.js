<template>
  <div class="infinite-scroll">
    <moon-infinite-scroll :triggerDistance='100' :scrollDisabled='loading' :scrollFn="loadMore">
      <li v-for="(item, index) in 30" :key=index>
        {{index}}
      </li>
    </moon-infinite-scroll>
    <div class="no-more" v-show="!noContent && noMore">已全部加载完成～</div>
  </div>
</template>

<script>
import '@/components/CircleCountDown'
export default {
  data () {
    return {
      list: [],
      loading: false,
      size: 10,
      page: 0,
      noMore: false,
      noContent: false
    }
  },
  methods: {
    loadMore () {
      if (this.noMore) return
      this.loading = true
      utils.ajax('POST')('/writeoff-web-api/vouchers/settlement/bill/monthlyList', {size: this.size, page: ++this.page})
      .then(res => {
        if (res.content.length === 0) {
          this.noMore = true
        } else {
          this.settleList.push(...res.content)
          this.loading = false
        }
      })
    },
    getData () {
      utils.ajax('POST')('/writeoff-web-api/vouchers/settlement/bill/monthlyList', {size: this.size, page: this.page})
      .then(res => {
        if (res.content.length === 0) {
          this.noContent = true
        } else {
          this.settleList = res.content
          this.noContent = false
        }
      })
    }
  }
}
</script>

