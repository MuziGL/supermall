<template>
  <tab-bar>
    <tab-bar-item path='/home' activeColor="deeppink">
      <template #item-icon>
        <img slot="item-icon" src="../assets/img/tabbar/home.png" alt="" />
      </template>
      <template #item-icon-active>
        <img
          slot="item-icon-active"
          src="../assets/img/tabbar/home_active.png"
          alt=""
        />
      </template>
      <template #item-text>
        <div slot="item-text">首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path='/category' activeColor="deeppink">
      <template #item-icon>
        <img slot="item-icon" src="../assets/img/tabbar/category.png" alt="" />
      </template>
      <template #item-icon-active>
        <img
          slot="item-icon-active"
          src="../assets/img/tabbar/category_active.png"
          alt=""
        />
      </template>
      <template #item-text>
        <div slot="item-text">分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path='/cart' activeColor="deeppink">
      <template #item-icon>
        <img slot="item-icon" src="../assets/img/tabbar/shopcart.png" alt="" />
      </template>
      <template #item-icon-active>
        <img
          slot="item-icon-active"
          src="../assets/img/tabbar/shopcart_active.png"
          alt=""
        />
      </template>
      <template #item-text>
        <div slot="item-text">购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path='/profile' activeColor="deeppink">
      <template #item-icon>
        <img slot="item-icon" src="../assets/img/tabbar/profile.png" alt="" />
      </template>
      <template #item-icon-active>
        <img
          slot="item-icon-active"
          src="../assets/img/tabbar/profile_active.png"
          alt=""
        />
      </template>
      <template #item-text>
        <div slot="item-text">我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar.vue";
import TabBarItem from "./tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
