<template>
  <div>
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../assets/images/1.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/2.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/3.jpg" alt />
        </swiper-slide>
        <div class="swiper-pagination pr-5" slot="pagination" style="text-align:right"></div>
      </swiper>
    </div>
    <!-- end of swiper -->

    <div class="entry mt-3">
      <div class="d-flex flex-wrap">
        <a href class="entry-item my-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news mb-5"></i>
          <div>爆料站</div>
        </a>
      </div>
      <div class="retract py-2">
        <i class="sprite sprite-arrow"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav-entry -->

    <base-card-list title="新闻列表" icon="teacher-one" :categories="newsCategories">
      <template #default="{ category }">
        <router-link tag="div" :to="`/article/${news._id}`" class="list d-flex pb-5 fs-l " v-for="(news) in category.newslist" :key="news._id">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <h3 class="flex-1  text-overflow px-1">{{news.name}}</h3>
          <span>{{news.createdAt.slice(0,2)}}</span>
        </router-link >
      </template>
    </base-card-list>

    <base-card-list title="英雄列表" icon="teacher-one" :categories="heroCategories">
      <template #default="{ category }">
        <div class="container d-flex flex-wrap  " >
          <router-link :to="`/hero/${hero._id}`" class="item  text-center " v-for="hero in category.heroes" :key="hero._id" style="display: block;width:20% ">
            <img :src="hero.avatar" style="width:57px;height:57px" alt="">
            <span class="py-2" style="display:inline-block">{{hero.name}}</span>
          </router-link>
        </div>
      </template>
    </base-card-list>
    <base-card title="英雄列表" icon="teacher-one"></base-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },
      newsCategories: [],
      heroCategories: []
      // categories: [
      //   {
      //     name: "热梦",
      //     newlist: new Array(4).fill(true).map(() => ({
      //       name: "公告",
      //       title: "3月11日全服不停机更新公告",
      //       date: "03/16"
      //     }))
      //   },
      //   {
      //     name: "热梦",
      //     newlist: new Array(4).fill(true).map(() => ({
      //       name: "公告",
      //       title: "3月11日全服不停机更新公告",
      //       date: "03/16"
      //     }))
      //   }
      // ]
    };
  },
  methods: {
    async fetch() {
      const news_res = await this.$http.get("/news/list")      
      this.newsCategories = news_res.data
      
      const heroes_res = await this.$http.get("/heroes/list")
      this.heroCategories = heroes_res.data
    }
  },

  created() {
    this.fetch();
  }
};
</script>


<style lang="scss">
@import "../assets/styles/reset.scss";
@import "../assets/styles/home.scss";
</style>


