<template>
  <div>
    <div class="recipe-row">
      <div class="recipe-col" v-for="(col, idy) in recipes_divided" :key="idy">
        <div class="recipe-item" v-for="(item, idx) in col" :key="idx">
          <recipe-card :cover="item.cover" :title="item.name" @select="select($event, item, idx * col_count + idy)"></recipe-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recipes from '../assets/recipes'
import RecipeCard from "@/components/recipeCard"

import router from "@/router"

export default {
  name: "weightlossDiet",
  components: {RecipeCard},
  data:()=>{
    return{
      recipes_divided: [[],[],[],[]],
      col_count: 4,
    }
  },
  created() {
    this.divideDiet()
  },
  methods: {
    divideDiet(){
      console.log(this.recipes_divided[1])
      console.log(typeof(this.recipes_divided))
      for(let i = 0; i < recipes.length; i++){
        let col = i % this.col_count
        console.log(col)
        this.recipes_divided[col].push(recipes[i])
      }
      console.log(this.recipes_divided)
    },
    select(e, item, index){
      console.log(index)
      console.log(item)
      console.log("click?")
      // this.$message.success(index.toString())
      router.push({
        path: '/detail',
        query:{
          id: index
        }
      })
    }
  }
}
</script>

<style scoped>
.recipe-row{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}
.recipe-col{
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 21%;
  margin: 2%;
}
.recipe-item{
  margin-top: 50px;
}
</style>
