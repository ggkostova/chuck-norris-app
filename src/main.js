import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { createStore } from "vuex";

import HomePage from './view/HomePage.vue';
import JokesPage from './view/JokesPage.vue';
import FavouritesPage from './view/FavouritesPage.vue';
import 'bootstrap/dist/css/bootstrap.css';

const router = createRouter({
    history:createWebHistory(),
    routes: [
        { path: '/', component: HomePage},
        { path: '/jokes', component: JokesPage},
        { path: '/favourites', component: FavouritesPage}
    ],
});

const store = createStore({
    state(){
        return{
            favourites:[],
        };
    },
    mutations:{
        addToFavourites(state, joke) {
            state.favourites = JSON.parse(localStorage.getItem('Favourites')) || [];
            state.favourites.push(joke);
            localStorage.setItem("Favourites", JSON.stringify(state.favourites));
        },
        removeJokeFromFavourites(state, jokeId){
            if(!this.favouriteJokes){
                this.favouriteJokes = [];
            }
            this.favouriteJokes = this.favouriteJokes.filter(joke => joke.id !== jokeId);
            localStorage.setItem('Favourites', JSON.stringify(this.favouriteJokes));
        }
    },
})

const app = createApp(App);

app.use(store);

app.use(router);

app.mount('#app');

