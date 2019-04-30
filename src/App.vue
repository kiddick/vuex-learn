<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from '@/components/ProductListOne.vue';
import ProductListTwo from '@/components/ProductListTwo.vue';

export default {
  name: 'app',
  data() {
    return {
      products: [
      {name:'banana', price: 20},
      {name:'apple', price: 220},
      {name:'toy', price: 210},
      {name:'car', price: 234220}
      ]
    }
  },
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
  }
}
</script>

<style>
body {
  font-family: Ubuntu;
}
</style>
