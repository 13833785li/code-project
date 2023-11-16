<template>
  <div id="app">
    <div class="background"></div>
    <div class="header">
      <div class="recipe-demo">
        <el-icon><KnifeFork /></el-icon>RECIPE-DEMO
      </div>
      <el-menu
          class="nav-menu"
          mode="horizontal"
          :default-active="activeIndex"
          background-color="rgba(0, 0, 0, 0)"
          text-color="brown"
          active-text-color="orange"
          router
      >
        <el-menu-item index="/">
          <template #title>
            <el-icon size="30"><House /></el-icon>HOME
          </template>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon size="30"><Memo /></el-icon>COOKING STYLE
          </template>
          <el-sub-menu index="2-1">
            <template #title>CHINESE CUISINE</template>
            <el-menu-item>Shangdong Cuisine</el-menu-item>
            <el-menu-item>Sichuan Cuisine</el-menu-item>
            <el-menu-item>Guangdong Cuisine</el-menu-item>
            <el-menu-item>Jiangsu Cuisine</el-menu-item>
            <el-menu-item>Fujian Cuisine</el-menu-item>
            <el-menu-item>Zhejiang Cuisine</el-menu-item>
            <el-menu-item>Hunan Cuisine</el-menu-item>
            <el-menu-item>Anhui Cuisine</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2-2">
            <template #title>FRENCH CUISINE</template>
            <el-menu-item>Classic Cuisine</el-menu-item>
            <el-menu-item>Bourgeoise Cuisine</el-menu-item>
            <el-menu-item>Nouvelle Cuisine</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2-3">
            <template #title>ITALIAN CUISINE</template>
            <el-menu-item>North Cuisine</el-menu-item>
            <el-menu-item>Centre Cuisine</el-menu-item>
            <el-menu-item>South Cuisine</el-menu-item>
            <el-menu-item>Island Cuisine</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2-4">
            <template #title>JAPANESE CUISINE</template>
            <el-menu-item>Kaiseki Cuisine</el-menu-item>
            <el-menu-item>Vegetarian Cuisine</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2-5">
            <template #title>THAI CUISINE</template>
            <el-menu-item>South Cuisine</el-menu-item>
            <el-menu-item>Centre Cuisine</el-menu-item>
            <el-menu-item>North Cuisine</el-menu-item>
            <el-menu-item>North-east Cuisine</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="/diet">
          <template #title>
            <el-icon size="30"><Watermelon /></el-icon>WEIGHT-LOSS DIET
          </template>
        </el-menu-item>
      </el-menu>
    </div>
    <el-main>
      <router-view style="width: 100%"></router-view>
    </el-main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data:()=>{
    return{
      activeIndex: '/',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.background{
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  z-index: -99;
  background-image: url("../public/static/images/background.png");
  background-size: cover;
}
.header{
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.recipe-demo{
  width: 25%;
  font-size: 50px;
  font-weight: bolder;
}
.nav-menu{
  width: 35%;
  margin-left: 50px;
  font-weight: bold;
}
</style>
