<template>
  <div class="home-container">
    <div class="left-side">
      <description-component :header-text="headerText" :description-text="descriptionText"></description-component>
    </div>
    <hero-section :img-src="'/images/chuck-norris.jpg'" :img-alt="imageAlt"></hero-section>
  </div>

</template>

<script>
  import HeroSection from "@/components/HeroSection.vue";
  import DescriptionComponent from "@/components/DescriptionComponent.vue";
  export default {
    components: {HeroSection, DescriptionComponent},
    data(){
      return {
        buttonText: 'Get jokes',
        headerText: 'Chuck Norris',
        descriptionText: 'This website is created with comic purpose. Here you can have fun reading Chuck Norris jokes and choose them by category. If some jokes impress you, you can add them to favourites and show them to your friends.'
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
</style>