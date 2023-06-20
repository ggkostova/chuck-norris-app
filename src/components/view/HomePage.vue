<template>
  <div class="home-container">
    <div class="left-side">
        <h2>Chuck Norris</h2>
        <h4>In this website you can have fun reading Chuck Norris jokes.
          You can read funny jokes or choosen by category. If some jokes impress you, you can add them to favourites. </h4>
        <router-link to="/jokes">
          <button-component :button-text="buttonText" ></button-component>
        </router-link>
    </div>
    <img class="chuck-norris-image" src="../../assets/images/chuck-norris.jpg" alt="Chuck Norris image">
  </div>

</template>

<script>
  import ButtonComponent from "../ButtonComponent.vue";
  export default {
    components: {ButtonComponent},
    data(){
      return {
        buttonText: 'Get jokes',
      }
    },
  }
</script>

<style>
*{
  font-family: "Berlin Sans FB";
  letter-spacing: 1px;
}
.home-container{
  height: 90vh;
}
.left-side {
  width: 20%;
  height: 100%;
  position: relative;
  top: 130px;
  left: 20%;
  color: #000000;
  border-radius: 10px;
  text-align: center;
  padding: 50px;
}
.left-side h2, .left-side h4{
  margin-bottom: 30px;
}
.left-side h2{
  font-weight: bold;
  font-size: 40px;
}
.left-side h4 {
  font-size: 30px;
}

.chuck-norris-image{
  position: absolute;
  right: 18%;
  top: 16%;
  width: 37%;
  height: 77%;
  box-shadow: 5px 5px 5px #afafaf;
  border-radius: 10%;
  background-color: rgba(81, 81, 161, 0.99);
}
</style>