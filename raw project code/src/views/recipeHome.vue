<template>
  <div class="home">
    <div class="title"><el-icon><ColdDrink /></el-icon>Introduction</div>
    <el-card class="introduction-card">
      <div class="text">{{ introduction }}</div>
    </el-card>
    <div class="title"><el-icon><Dish /></el-icon>Hot Dishes</div>
    <el-carousel class="hot-recipes-carousel" height="600px">
      <el-carousel-item v-for="item in hotRecipes" :key="item" :label="item.label">
        <el-image :src="item.cover" class="cover-image"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

import hots from '../assets/hots'

export default {
  name: "recipeHome",
  data:()=>{
    return{
      introduction:'This is a vue-based demo of Recipe Collection for Beginners. The website shows hot recipes, various cooking style from all over the world and diets for health life. And it is designed to allow users to share their own recipes.',
      hotRecipes: hots
    }
  }
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: start;
}
.title{
  width: 60%;
  margin: 30px;
  text-align: left;
  font-weight: bold;
  font-size: 30px;
  text-decoration: underline;
}
.hot-recipes-carousel{
  width: 60%;
  margin: 30px;
  border-radius: 30px;
}
.cover-image{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.introduction-card{
  margin: 30px;
  width: 60%;
  height: auto;
  border-radius: 30px;
  background: linear-gradient(90deg, lightgoldenrodyellow 0%, rgba(255, 255, 255, 0));
}
.introduction-card .text{
  text-align: left;
  font-size: large;
  font-style: italic;
}
</style>
