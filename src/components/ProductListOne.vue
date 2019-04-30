<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">₽{{product.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
        return this.$store.getters.saleProducts;
    }
  }
};
</script>

<style scoped>
.price {
  font-weight: bold;
  color: purple;
  display: block;
}
</style>
