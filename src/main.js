import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import HomePage from './components/view/HomePage.vue';
import JokesPage from './components/view/JokesPage.vue';
import FavouritesPage from './components/view/FavouritesPage.vue';
import 'bootstrap/dist/css/bootstrap.css';

const router = createRouter({
    history:createWebHistory(),
    routes: [
        { path: '/', component: HomePage},
        { path: '/jokes', component: JokesPage},
        { path: '/favourites', component: FavouritesPage}
    ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');

