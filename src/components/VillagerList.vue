<template>
<div class="wrapper">
  <div class="products">
    <div class="product">
      <div class="info">
        <h1>{{current.name}}</h1>
        <p>Gender: {{current.gender}}</p>
        <p>Personality: {{current.personality}}</p>
        <p>Species: {{current.species}}</p>
        <p>B-day: {{current.birthday}}</p>
        <p>Catch-phrase: {{current.catchphrase}}</p>
        <p>Hobby: {{current.hobby}}</p>
      </div>
      <div class="image">
        <img :src="current.image">
      </div>
      <div class="price">
        <button @click="addToCart(current)" class="auto">Add to Cart</button>
      </div>
      <div class="price">
        <button @click="nextVillager" class="auto">Next Villager</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'VillagerList',
  props: {
    villagerData: Array,
  },

  data() {
  return {
    current: {
      id: '',
      name: '',
      image: '',
      gender: '',
      personality: '',
      species: '',
      birthday: '',
      catchphrase: '',
      hobby: ''
      }
    }
  },
  created() {
    this.villager();
  },
  methods: {
    villager() {
      this.current = this.villagerData[0];
    },
    addToCart(product) {
      this.$root.$data.cart.push(product);
    },
    nextVillager() {
      if (this.current.id != this.villagerData.length - 1)
      {
        this.current = this.villagerData[this.current.id];
      }
      else {
        this.current = this.villagerData[0];
      }
    },
    previousVillager() {

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
  width: 250px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 250px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.image {
  width: 250px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 200px;
  width: 250px;
}

.info h1 {
  font-size: 22px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 16px;
}


.price {
  display: flex;
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
