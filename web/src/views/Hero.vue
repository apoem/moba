<template>
  <div>
    <div class="top-bar py-2 px-4 d-flex ai-center fs-md">
      <a href="/" class="sprite sprite-logo"></a>
      <h1 class="  px-3  fs-xl">王者荣耀</h1>
      <span class="flex-1">攻略站</span>
      <a href="#" class="">
        <span>更多英雄</span>
        <span class="fs-xl pl-2">&gt;</span>
      </a>
    </div>
    <div class="post">{{model.name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`hero/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetch()
  },
  components: {}
};
</script>

<style lang="scss" >
@import "../assets/styles/reset.scss";

.top-bar {
  color: #fff
}
</style>
