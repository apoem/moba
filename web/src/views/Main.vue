<template>
  <div>
    <div class="top-bar py-2 px-4 d-flex ai-center">
        <a href class="sprite sprite-logo"></a>
        <div class="logo-title ml-2 flex-grow-1" >
          <h1 class="mb-2">王者荣耀</h1>
          <span class="fs-xs">团队成就更多</span>
        </div>
        <a href="#" class="sprite sprite-download"></a>
    </div>
    <div class="nav d-flex jc-around py-3 ">
      <div class="nav-item "><a class="pb-1 active" href="/">首页</a></div>
      <div class="nav-item"><a class="pb-1" href="">攻略中心</a></div>
      <div class="nav-item"><a class="pb-1" href="">赛事中心</a></div>
    </div>
    <!-- end of top-bar -->
    <router-view ></router-view>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          loop : true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
         },
        }
      }
    },
  }
</script>

<style lang="scss">
@import "../assets/styles/reset.scss";
@import "../assets/styles/main.scss";


</style>

