<template>
  <button class="button" @click="navigateTo">{{ buttonText }}</button>
</template>

<script>
export default {
  props: ['buttonText'],

  methods: {
    navigateTo(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style>
.button{
  margin-left: 30px;
  padding: 10px 22px;
  background-color: #efd6d6;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  font-size: 20px;
  color:black;
  &:hover{
    transform: scale(1.1);
  }
}

</style>