<template>
  <div class="jokes-page">
    <div class="jokes-page-btns">
      <button-component :button-text="categoriesBtn"></button-component>
      <button-component :button-text="anotherJokeBtn" @click="fetchRandomJoke"></button-component>
    </div>
    <div class="joke-container">
      <div v-if="joke">
        <p>{{ joke }}</p>
      </div>
      <div v-else>
        <p>Loading joke...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import fetchJoke from "@/utilities";

export default {
  components: {ButtonComponent},
  data(){
    return{
      categoriesBtn: 'Choose category',
      anotherJokeBtn: 'Get another one',
      joke: '',
      categories: [],
      selectedCategory: '',
    }
  },
  created() {
    this.fetchRandomJoke();
  },
  methods:{
    async fetchRandomJoke(){
      this.joke = await fetchJoke('https://api.chucknorris.io/jokes/random');
    }
  }
}
</script>

<style>
    .jokes-page{
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      top:250px;
  }
    .joke-container{
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
</style>