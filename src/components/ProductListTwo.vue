<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in products">
        <span class="name">{{product.name}}</span>
        <span class="price">₽{{product.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default { props: ["products"]};
</script>

<style scoped>
.price {
    font-weight: bold;
    color: green;
    display: block;
}

</style>
