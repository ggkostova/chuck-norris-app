<template>
  <div class="info-side">
    <h2>{{ headerText }}</h2>
    <h4> {{ descriptionText }} </h4>
    <router-link to="/jokes">
      <button-component class="btn" :button-text="'Get jokes'"></button-component>
    </router-link>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  components: {ButtonComponent},
  props: {
    headerText:{
      type:String,
      required: true
    },
    descriptionText:{
      type:String,
      required: true
    }
  }
}
</script>

<style scoped>
div {
width: 30%;
position: relative;
top: 10rem;
left: 12%;
border-radius: 10px;
text-align: center;
color: #efefef;
}

div h2, div h4{
margin-bottom: 30px;
}

div h2{
font-weight: bold;
font-size: 40px;
}

div h4 {
font-size: 30px;
}

.btn{
position: relative;
right: 15px;
}
</style>