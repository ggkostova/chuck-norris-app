<template>
  <header class="header">
    <div class="logo-side">
      <img src="../../assets/images/logo.png" alt="Logo">
    </div>
    <div class="buttons-side">
      <router-link :to="{ path: '/' }">
        <button-component :button-text="homeLinkBtn"></button-component>
      </router-link>
      <router-link :to="{ path: '/jokes' }">
        <button-component :button-text="jokeLinkBtn"></button-component>
      </router-link>
      <router-link :to="{ path: '/favourites' }">
        <button-component :button-text="favouritesLinkBtn"></button-component>
      </router-link>
    </div>
  </header>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

  export default {
    components: {ButtonComponent},
    data(){
      return{
        homeLinkBtn: 'Home',
        jokeLinkBtn: 'Joke',
        favouritesLinkBtn: 'Favourites',
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #411b1b;
  height: 100px;
}

.logo-side img {
  margin: 5px 0 0 30px;
  width: 120px;
  height: 110px;
}

.buttons-side{
  position: relative;
  right: 5%;
}

/*.buttons-side button {*/
/*  margin-left: 30px;*/
/*  padding: 5px 20px 5px 20px;*/
/*  background-color: #e3d1d1;*/
/*  border: none;*/
/*  border-radius: 10px;*/
/*  &:hover{*/
/*    transform: scale(1.1);*/
/*  }*/
/*}*/
a{
  text-decoration: none;
  color:black;
}

</style>