<template>
  <div class="album-container">
    <album
      :cover="recipes[itemId].cover"
      :ingredient="recipes[itemId].ingredient"
      :pictures="recipes[itemId].pictures"
      :steps="recipes[itemId].steps"
      class="album"
    >
    </album>
  </div>
</template>

<script>

import recipes from '../assets/recipes'
import Album from "@/components/album"

export default {
  name: "recipeDetail",
  components: {Album},
  data: ()=>{
    return{
      recipes,
      itemId: -1
    }
  },
  created() {
    console.log('receive id')
    this.itemId = this.$route.query.id
    console.log(this.itemId)
  }
}
</script>

<style scoped>
.album-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.album{
  margin: 100px;
}
</style>
