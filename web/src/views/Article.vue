<template>
  <div>
    <div class="header d-flex py-2 ai-center mb-3 fs-xl">
      <a href="/">
        <i class="iconfont icon-">&lt;</i>
      </a>
      <h3 class="text-overflow px-3 flex-1">{{model.name}}</h3>
      <span class="fs-md">2020-3-01</span>
    </div>
    <article class="px-3">
      <div class="body" v-html="model.body || model.name"></div>
      <div class="related px-3 mt-5">
        <span class="fs-xl">相关资讯</span>
        <router-link tag="div" :to="`/article/${item._id}`" v-for="item in model.related" :key="item._id" class="d-flex py-2">
          <span class="text-overflow flex-1 pr-5 fs-xl">{{item.name}}</span>
          <span class="fs-x" style="color:#aaa">2020-7878</span>
        </router-link>
      </div>
    </article>
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
  watch: {
    id() {
      return this.fetch();
    }
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/article/${this.id}`);
      this.model = res.data;
      console.log(this.model.related);
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss" >
.header {
  color: #4394e4;
  border-bottom: 1px solid #bbb;
  span {
    color: #bbb;
  }
}
article {
  line-height: 1.4em;
  img {
    width: 100%;
    height: auto;
  }
  iframe {
    width: 100%;
    height: auto;
  }
  .related {
    >span:first-child {
      color: #4394e4;

    }
  }
}
</style>