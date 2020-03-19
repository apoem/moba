<template>
  <div class="card px-3 mt-3">
    <div class="card-header d-flex py-3 ai-center">
      <i v-bind:class="`icon-${icon}`" class="iconfont"></i>
      <span class="flex-grow-1 pl-3 fs-xl">{{title}}</span>
      <i class="iconfont icon-caidan1"></i>
    </div>
    <div class="card-body py-1">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

