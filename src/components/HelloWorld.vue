<template>
  <div class="box">
    <div class="header">
      <ul class="header-content">
        <li class="header-item">推荐</li>
        <li class="header-item">新闻</li>
        <li class="header-item">娱乐</li>
        <li class="header-item">体育</li>
        <li class="header-item">图片</li>
        <li class="header-item">财经</li>
      </ul>
    </div>
    <div class="banner-content">
      <img src="../images/name.jpg" alt="" class="banner">
      <p class="banner-title">2017网易时尚跨界盛典</p>
    </div>
    <div class="news-content">
      <ul>
        <li class="news-item">
          <div class="item-inner">
            <img src="../images/item.jpg" alt="" class="news-img">
            <p class="news-title">
              天津市热门民政府副秘书长，办公厅党住成员杜强被查
            </p>
            <span class="time">
              1小时前
            </span>
            <span class="num">
              99次
            </span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img src="../images/item.jpg" alt="" class="news-img">
            <p class="news-title">
              天津市热门民政府副秘书长，办公厅党住成员杜强被查
            </p>
            <span class="time">
              1小时前
            </span>
            <span class="num">
              99次
            </span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img src="../images/item.jpg" alt="" class="news-img">
            <p class="news-title">
              天津市热门民政府副秘书长，办公厅党住成员杜强被查
            </p>
            <span class="time">
              1小时前
            </span>
            <span class="num">
              99次
            </span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img src="../images/item.jpg" alt="" class="news-img">
            <p class="news-title">
              天津市热门民政府副秘书长，办公厅党住成员杜强被查
            </p>
            <span class="time">
              1小时前
            </span>
            <span class="num">
              99次
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
  @function px2rem($px) {
    $rem: 37.5px;
    @return ($px / $rem) + rem;
  }
  .header {
    width: 100%;
    height: px2rem(40px);
    background-color: red;
    padding-left: px2rem(23px);
    // box-sizing: border-box样式可以去掉padding-left增大的宽带。
    box-sizing: border-box;
    .header-content{
      overflow: hidden;
      .header-item {
        float: left;
        color: #ffcdce;
        font-size: px2rem(16px);
        margin-right: px2rem(20px);
        line-height: px2rem(40px);
        &:nth-child(2) {
          color: #fff;
          font-size: px2rem(17px);
        }
      }
    }
  }
  .banner-content {
    position: relative;
    .banner {
      width: 100%;
      display: block;
      height: px2rem(190px);
    }
    .banner-title{
      position: absolute;
      left: px2rem(15px);
      bottom: px2rem(15px);
      font-size: px2rem(16px);
      color: #fff;
    }
  }
  .news-content {
    .news-item {
      width: 100%;
      height: px2rem(90px);
      padding-left: px2rem(15px);
      padding-right: px2rem(15px);
      box-sizing: border-box;
    }
    .item-inner {
      position: relative;
      overflow: hidden;
      height: 100%;
      border-bottom: px2rem(1px) solid #e5e5e5;
    }
    .news-img {
      float: left;
      display: block;
      margin-top: px2rem(10px);
      width: px2rem(95px);
      height: px2rem(70px);
      margin-right: px2rem(15px);
    }
    .news-title {
      color: #404040;
      font-size: px2rem(15px);
      margin-top: px2rem(10px);
      line-height: px2rem(20px);
    }
    .time {
      position: absolute;
      left: px2rem(105px);
      color: #888;
      font-size: px2rem(12px);
      bottom: px2rem(17px);
    }
    .num{
      position: absolute;
      color: #888;
      font-size: px2rem(12px);
      right: px2rem(4px);
      bottom: px2rem(17px);
    }
  }

</style>
