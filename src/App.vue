<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="../images/dd98bnh-cdaa0e7e-c5f1-45f9-99fb-5a22d3c2974b.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/globe.png">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <img src="../images/Screen Shot 2020-11-06 at 14.37.35.png">
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <p class="footer"> <a href="https://github.com/frenchmajorcsminor/animal-crossing" target="_blank">
  My Github Repo
  </a>
  </p>
</div>
</template>

<script>
export default {
  computed: {
    getCart: function() {
      return this.$root.$data.cart.length;
    }
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background-color: #FFF8DC;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #008B8B;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
  text-align: center;
}

#side img {
  border-radius: 25px;
  width: 150px;
}

.footer {
  text-align: center;
  display: block;
  font-family: "Lucida Console", Courier, monospace;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
