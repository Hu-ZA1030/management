<template>
    <div class="header">
      <span>欢迎您：<h1 v-text="username"></h1></span>
    </div>
</template>

<script>
export default {
   data:function() {
      return{
          username:""
      } 
   },
   mounted(){
       var username = document.cookie
    //    console.log("cookie",username)
        this.username = username
   }
    
}
</script>

<style lang="scss">
.header{
    span{
        h1{
            display: inline-block;
        }
    }
}

</style>