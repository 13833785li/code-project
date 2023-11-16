<template>
  <div class="book">
    <div
        v-for="(page, index) in albumPages"
        :id="'album-page' + index"
        :key="index"
        :style="setPageStyle(index)"
        class="album-page"
    >
      <div
          :style="setPageBackBackground(index)"
          @click="prevPage"
          class="page-back"
      >
        <el-image v-if="page.pageBack" :src="page.pageBack" class="page-picture"></el-image>
        <div v-if="index>0" class="step">
          <div class="signal">{{ 2*index }}</div>
          <div class="step-text">{{ steps[2*index-1] }}</div>
        </div>
        <div v-if="!page.pageBack && !page.pageFront" class="programme">
          <div class="programme-title">INGREDIENT</div>
          <div class="programme-content">{{ ingredient }}</div>
          <el-image v-if="cover" :src="cover" class="page-picture"></el-image>
        </div>
      </div>
      <div
          :style="setPageFrontBackground(index)"
          @click="changePage"
          class="page-front"
      >
        <el-image v-if="page.pageFront" :src="page.pageFront" class="page-picture"></el-image>
        <div v-else class="cover-text">RECIPE</div>
        <div v-if="index>0" class="step">
          <div class="step-text">{{ steps[2*index-2] }}</div>
          <div class="signal">{{ 2*index-1 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'recipeAlbum',
  components: {},
  props: {
    cover: { type: String, default: '' },
    ingredient: { type: String, default: '' },
    pictures: { type: Array, default: ()=>[] },
    steps: { type: Array, default: ()=>[] },
  },
  data: () => ({
    currentIndex: 0,
    albumPages: [],
    viewPage: false
  }),
  created() {
    this.getAlbumPages()
  },
  methods: {
    getAlbumPages() {
      this.albumPages.push({
        pageFront: '',
        pageBack: ''
      })
      for (let i = 0; i < this.pictures.length - 1; i = i + 2) {
        this.albumPages.push({
          pageFront: this.pictures[i],
          pageBack: this.pictures[i + 1]
        })
      }
      if (this.pictures.length % 2 === 1) {
        this.albumPages.push({
          pageFront: this.pictures[this.pictures.length - 1],
          pageBack: ''
        })
      }
    },
    setPageStyle(index) {
      return {
        zIndex: this.albumPages.length - index
      }
    },
    setPageFrontBackground(index) {
      if (index === 0) {
        return {
          backgroundColor: 'lightgoldenrodyellow',
          backgroundSize: 'contain',
          boxShadow: '0 0 15px rgba(0,0,0,0.5)'
        }
      }
      return {
        backgroundColor: 'lightgoldenrodyellow',
        backgroundSize: 'contain',
        boxShadow: '0 0 15px rgba(0,0,0,0.5)'
      }
    },
    setPageBackBackground(index) {
      console.log(index)
      return {
        backgroundColor: 'lightgoldenrodyellow',
        backgroundSize: 'contain',
        boxShadow: '0 0 15px rgba(0,0,0,0.5)'
      }
    },
    changePage() {
      const book = document.querySelector("[class^='book']")
      const pageDoms = document.querySelectorAll("[class^='album-page']")
      if (this.currentIndex >= pageDoms.length) {
        this.currentIndex = 0
        book.style.transform = 'translateX(0)'
        let index = 0
        while (index < pageDoms.length) {
          pageDoms[index].style.transition = '0.5s'
          pageDoms[index].style.transform = 'rotateY(0)'
          pageDoms[index].style.zIndex = pageDoms.length - index
          index++
        }
        return
      }
      book.style.transition = '2s'
      book.style.transform = 'translateX(50%)'
      pageDoms[this.currentIndex].style.transition = '2s'
      pageDoms[this.currentIndex].style.transform = 'rotateY(-150deg)'
      pageDoms[this.currentIndex].style.zIndex = ++this.currentIndex
    },
    prevPage() {
      const book = document.querySelector("[class^='book']")
      const pageDoms = document.querySelectorAll("[class^='album-page']")
      console.log(this.currentIndex)
      this.currentIndex--
      pageDoms[this.currentIndex].style.transition = '2s'
      pageDoms[this.currentIndex].style.transform = 'rotateY(0)'
      pageDoms[this.currentIndex].style.zIndex =
          pageDoms.length - this.currentIndex
      if (this.currentIndex === 0) {
        book.style.transform = 'translateX(0)'
      }
    }
    // sleep(time) {
    //   const start = new Date().getTime() + time
    //   while (true) {
    //     if (new Date().getTime() > start) return
    //   }
    // }
  }
}
</script>

<style scoped>
.book {
  width: 640px;
  height: 800px;
  position: relative;
  transform-style: preserve-3d;
  perspective: 3000px;
  background-image: url('../../public/static/images/album_end.png');
  background-size: cover;
  border-radius: 10px 30px 30px 10px;
}
.album-page {
  transform-origin: left;
  transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
}
.cover-text {
  margin: auto;
  font-size: 100px;
  font-weight: bolder;
  color: brown;
}
.page-front {
  width: 640px;
  height: 800px;
  backface-visibility: hidden;
  border-radius: 10px 30px 30px 10px;
}
.page-front:hover {
  cursor: pointer;
}
.page-back {
  width: 640px;
  height: 800px;
  transform: rotateY(180deg);
  border-radius: 30px 10px 10px 30px;
}
.page-back:hover {
  cursor: pointer;
}
.page-front,
.page-back {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
}
.page-picture {
  width: 500px;
  height: auto;
  object-fit: contain;
  margin: auto;
}
.step {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.signal{
  width: 60px;
  height: 60px;
  margin: 30px;
  border-radius: 50%;
  background-color: green;
  color: white;
  font-size: 48px;
  font-weight: bolder;
  text-align: center;
}
.page-front .step-text{
  width: 400px;
  margin-left: 120px;
  text-align: center;
  font-size: larger;
}
.page-back .step-text{
  width: 400px;
  margin-right: 120px;
  text-align: center;
  font-size: larger;
}
.programme {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.programme-title {
  width: 100%;
  margin-top: 30px;
  text-align: center;
  font-size: 60px;
  font-weight: bold;
}
.programme-content {
  width: 80%;
  margin-top: 30px;
  text-align: left;
  font-size: larger;
  text-indent: 30px;
  font-family: Kai, serif;
}
.v-enter-active {
  transition: 0s;
}
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
