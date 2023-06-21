<template>
  <div class="fav-jokes-container">
    <h2> {{favouriteJokes === [] ? 'Favourite Jokes:' : 'Favourite Jokes list is empty.'}}</h2>
    <div class="cards-container">
      <div v-for="joke in favouriteJokes" :key="joke.id" class="card" style="width: 18rem;">
        <div class="card-body">
          <p class="laughing-emoji">😂</p>
          <p class="card-text">{{ joke.jokeText }}</p>
          <div class="heart" @click="removeJokeFromFavourites(joke.id)">
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favouriteJokes: [],
    };
  },
  mounted() {
    this.getDataFromLocalStorage();
  },
  methods: {
    getDataFromLocalStorage() {
      const temp = JSON.parse(localStorage.getItem('Favourites')) || [];
      this.favouriteJokes = temp;
    },
    removeJokeFromFavourites(jokeId){
      this.favouriteJokes = this.favouriteJokes.filter(joke => joke.id !== jokeId);
      localStorage.setItem('Favourites', JSON.stringify(this.favouriteJokes));
    }
  },
};
</script>

<style>
.fav-jokes-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #723b3b;
  max-height: 70vh;
  overflow-y: auto;
  min-height: 100%;
}
.fav-jokes-container h2{
  margin: 40px;
  color: #e7e7e7;
}
.cards-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.card{
  --bs-card-bg: #efd6d6 !important;
  height: auto;
  font-size: 1.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px #573131;
}
.heart{
  display: flex;
  align-self: center;
  justify-self: end;
}
.card-body{
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 20px 10px 10px 10px;
  position: relative;
}
.laughing-emoji{
  align-self: center;
  height: 20px;
  margin-bottom: 30px;
}
</style>