<template>
  <div class="home-container">
    <div class="left-side">
        <h2>Chuck Norris</h2>
        <h4>This website is created with comic purpose. Here you can have fun reading Chuck Norris jokes and choose them by category.
          If some jokes impress you, you can add them to favourites and show them to your friends. </h4>
        <router-link to="/jokes">
          <button-component class="home-btn" :button-text="buttonText" ></button-component>
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
  font-family: "Berlin Sans FB", Arial, sans-serif;;
  letter-spacing: 1px;
}
.home-container{
  min-height: 89.7%;
  background-color: #723b3b;
}
.left-side {
  width: 30%;
  position: relative;
  top: 8rem;
  left: 12%;
  border-radius: 10px;
  text-align: center;
  color: #efefef;
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
.home-btn{
  position: relative;
  right: 15px;
}
.chuck-norris-image{
  position: absolute;
  right: 12%;
  top: 17%;
  width: 37%;
  height: 78%;
  box-shadow: 5px 5px 5px #573131;
  border-radius: 10%;
  background-color: rgba(81, 81, 161, 0.99);
}
</style>