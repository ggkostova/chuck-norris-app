<template>
  <div class="jokes-page">
    <div class="jokes-page-btns">
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="selectedCategory" @change="fetchSelectedCategoryJoke">
        <option value="" selected>Choose category</option>
        <option v-for="category in categories" :value="category" :key="category">{{ category }}</option>
      </select>
      <button-component class="another-joke-btn" :button-text="anotherJokeBtn" @click="getAnotherJoke"></button-component>
    </div>

    <div class="joke-container">
      <div v-if="randomJoke.jokeText && !selectedCategory">
        <p>{{ randomJoke.jokeText }}</p>
      </div>
      <div v-else-if="selectedCategory && selectedCategoryJoke">
        <p>{{ selectedCategoryJoke }}</p>
      </div>
      <div v-else>
        <p>Loading joke...</p>
      </div>
<!--      <i :class="['fas', 'fa-star', 'star-icon']"></i>-->
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import fetchFunction from "@/utilities";
import { CHUCK_API_URL } from "@/constants";

export default {
  components: {
    ButtonComponent,
  },
  data() {
    return {
      categoriesBtn: 'Choose category',
      anotherJokeBtn: 'Get another one',
      randomJoke: {
        id: '',
        jokeText: ''
      },
      categories: [],
      selectedCategory: '',
      selectedCategoryJoke: ''
    };
  },
  created() {
    this.fetchRandomJoke();
    this.fetchAllCategories();
  },
  methods: {
    getAnotherJoke(){
      if(this.selectedCategory){
        this.fetchSelectedCategoryJoke();
      }else{
        this.fetchRandomJoke();
      }
    },
    async fetchRandomJoke() {
      const tempRandomJoke = await fetchFunction(`${CHUCK_API_URL}/random`);
      this.randomJoke.id = tempRandomJoke.id;
      this.randomJoke.jokeText = tempRandomJoke.value;
    },
    async fetchAllCategories() {
      const listedCategories = await fetchFunction(`${CHUCK_API_URL}/categories`);
      this.categories = listedCategories;
    },
    async fetchSelectedCategoryJoke() {
      if(this.selectedCategory){
        const categorizedJoke = await fetchFunction(`${CHUCK_API_URL}/random?category=${this.selectedCategory}`);
        this.selectedCategoryJoke = categorizedJoke.value;
      }else{
        this.selectedCategoryJoke = this.randomJoke.jokeText;
      }

    }
  }
};
</script>

<style>
.fas{
  height: 10px;
}
.jokes-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 250px;
}
.jokes-page-btns {
  display: flex;
  width: 70%;
  justify-content: center;
}
.form-select {
  padding: 0 0 0 1rem !important;
  --bs-body-bg: #d29999 !important;
  height: 60px;
  width: 20% !important;
  font-size: 20px !important;
}
.another-joke-btn{
  margin-bottom: 1rem;
  width: 20%;
}
.joke-container {
  width: 80%;
  height: 10rem;
  box-shadow: 5px 5px 5px #afafaf;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3d1d1;
  margin-top: 40px;
}
.joke-container>div {
  padding: 0px 10px;
}
</style>
