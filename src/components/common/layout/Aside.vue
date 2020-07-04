<template>
  <div class="aside">
    <div class="head-img">
      <i class="el-icon-thumb"></i>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#444"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu v-for="nav in navs" :index="nav.id+''" :key="nav.id">
        <template slot="title">
          <i :class="nav.icon"></i>
          <router-link :to="nav.path" tag="span" v-text="nav.title"></router-link>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      navs: [
        {
          id: 1,
          path: "/home",
          title: "商城",
          icon: "el-icon-s-platform",
          children: []
        },
        {
          id: 2,
          path: "/shop",
          title: "店铺",
          icon: "el-icon-s-shop",
          children: []
        },
        {
          id: 3,
          path: "/addList",
          title: "添加商品",
          icon: "el-icon-goods",
          children: []
        },
        {
          id: 4,
          path: "/ord",
          title: "订单",
          icon: "el-icon-tickets",
          children: []
        },
        {
          id: 5,
          path: "/client",
          title: "客户",
          icon: "el-icon-s-custom",
          children: []
        },
        {
          id: 6,
          path: "/editor",
          title: "详情发布",
          icon: "el-icon-s-data",
          children: []
        },
        {
          id: 7,
          path: "/chat",
          title: "聊天室",
          icon: "el-icon-coin",
          children: []
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.aside {
  height: 100%;
  .head-img {
    width: 150px;
    height: 70px;
    background: #444444;
    i {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #fff;
      margin: 35px auto;
      font-size: 25px;
      color: red;
      text-align: center;
      line-height: 50px;
    }
  }
}
</style>