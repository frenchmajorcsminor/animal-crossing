<template>
<div class="wrapper">
  <div class="products">
    <div class="product">
      <div class="info">
        <h1>{{current.name}}</h1>
        <p><strong>Gender:</strong> {{current.gender}}</p>
        <p><strong>Personality:</strong> {{current.personality}}</p>
        <p><strong>Species:</strong> {{current.species}}</p>
        <p><strong>B-day:</strong> {{current.birthday}}</p>
        <p><strong>Catch-phrase:</strong> <q>{{current.catchphrase}}</q></p>
        <p><strong>Hobby:</strong> {{current.hobby}}</p>
      </div>
      <div class="image">
        <img :src="require('../../images/'+current.key)" width="250" height="250"/>
      </div>
      <div class="firstOptions">
      <div class="price">
        <button @click="previousVillager" class="auto">Previous Villager</button>
      </div>
        <div class="price">
          <button @click="nextVillager" class="auto">Next Villager</button>
        </div>
      </div>
      <div class="secondOptions">

        <div class="price">
          <button @click="addToIsland(current)" class="auto">Invite to village</button>
        </div>
        <div class="price">
          <button @click="randomVillager" class="auto">Surprise Villager</button>
        </div>
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
    async villager() {
      this.current = this.villagerData[0];
    },
    addToIsland(person) {
      for(let i = 0; i < this.$root.$data.cart.length; i++) {
        if(this.$root.$data.cart[i].name === person.name) {
          return;
        }
      }
      this.$root.$data.cart.push(person);
    },
    nextVillager() {
      if (this.current.id != this.villagerData.length) {
        this.current = this.villagerData[this.current.id];
      }
      else {
        this.current = this.villagerData[0];
      }
    },
    getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
    },
    previousVillager() {
    if (this.current.id > 1)
    {
      this.current = this.villagerData[this.current.id - 2];
      }
    else
    {
      this.current = this.villagerData[this.villagerData.length - 1];
    }
    },
    randomVillager() {
      this.current = this.villagerData[this.getRandom(1, this.villagerData.length)];
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
  background: #CD5C5C;
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
  width: 120px;
  background: #000;
  color: white;
  margin: 10px;
  border: none;
}
.firstOptions {
  display: flex;
}
.secondOptions {
  display: flex;
}

.auto {
  margin-left: auto;
}
</style>
