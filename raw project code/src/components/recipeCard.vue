<template>
  <div @click="onClick">
    <div class="recipe-card">
      <el-image :src="cover" class="recipe-cover"></el-image>
      <div class="title-text">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recipeCard",
  props: {
    cover: { type: String, default: '' },
    title: { type: String, default: '' }
  },
  data:()=>{
    return{

    }
  },
  methods: {
    onClick:function (){
      this.$emit('select')
    }
  }
}
</script>

<style scoped>
.recipe-card {
  border-radius: 0.8rem;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  background-color: white;
}
.recipe-card:hover {
  cursor: pointer;
  transform: translateY(-1%);
  box-shadow: 0 20px 25px -5px grey;
}
.recipe-cover {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.title-text {
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>
