<template>
  <base-card :title="title" :icon="icon">
    <div class="card-nav py-3 d-flex jc-between">
      <a href="#####" :class=" {active: active === i}" 
      class="nav-item"
         v-for="(category, i) in categories"
         :key="i"
         @click="active = i"
         >{{category.name}}</a>
    </div>
    <div class="swiper">
      <swiper  :options="{autoHeight:true}">
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </base-card>
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
    },
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {},
  components: {}
};
</script>

<style >
</style>
