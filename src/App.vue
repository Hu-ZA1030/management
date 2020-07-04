<template>
  <div class="app">
    <router-view name="login"  v-if='$route.path == "/login"'></router-view>
    <StuLayout v-else></StuLayout>
   
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    StuLayout:()=>import("@/components/common/layout/StuLayout.vue"),
  },
  mounted(){
       
      
  },
  data:function(){
    return{
    
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss">
html,body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.app{
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
}
</style>
