<template>
  <div class="container">
    <p>hello koa</p>
    <div class="item-list">
      <div class="item" v-for="item in result" :key="item.id">
        <span class="Id">{{item.Id}}</span>
        <span class="openid">{{item.openid}}</span>
        <span class="username">{{item.username}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      result: []
    }
  },
  methods: {
    getData() {
      this.$axios.get('/api/getAll').then(res => {
        // console.log(res.data)
        this.result = res.data
      })
      // 同步
      // this.$store.commit('sync')
      // 异步
      this.$store.dispatch('async')
      setTimeout(() => {
        const totalData = this.$store.getters.getData
        console.log(totalData, 1111)
      }, 200)
    },
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped lang="less">
  .container {
    p {
      font-size: 20px;
      text-align: center;
    }
    .item-list {
      .item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .Id {
          width: 20px;
        }
        .openid {
          width: 220px;
        }
        .username {
          width: 100px;
        }
      }
    }
  }
</style>
