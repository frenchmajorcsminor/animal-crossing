<template>
<div class="productPage">
<div class="title">
<h1>Your Cart</h1>
<div class="wrapper">
  <div class="products" v-if="cart.length > 0">
    <div class="product" v-for="product in cart" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.country}}</p>
      </div>
      <div class="image">
        <img :src="product.image">
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
      </div>
      <div class="price">
      <button @click="removeFromCart(product)">Remove from Cart</button>
      </div>
    </div>
  </div>
  <div class="empty" v-else> <p> Your cart is empty</p></div>
</div>
</div>
</div>
</template>

<script>

export default {

  name: 'Cart',
  components: {
  },
  data() {
    return {
    searchText: '',
    }
  },
  computed: {
    cart() {
    return this.$root.$data.cart;
    }
  },
  methods: {
    removeFromCart(product) {
      for (let i = 0; i < this.$root.$data.cart.length; i++) {
        if (this.$root.$data.cart[i].id == product.id)
        {
          this.$root.$data.cart.splice(i, 1);
          return;
        }
      }
    },
    showEmpty() {

    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.title {
  text-align: center;
  display: block;
  font-family: "Lucida Console", Courier, monospace;
}
.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
  align-items: center;
  justify-content: center;

}
.empty {

}
button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
