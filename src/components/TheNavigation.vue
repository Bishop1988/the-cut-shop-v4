<template>
  <nav id="nav">
    <!-- <router-link to="/about">About</router-link> -->
    <p class="logo">The Cut Shop</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>

      <li v-for="material in materials" :key="material.name" class="links">
          <router-link :to="{
              name: 'materialsDetails',
              params: { slug: material.slug }
          }">
            {{ material.name }}
          </router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    materials() {
      return this.$store.state.materials;
    },
  },
};
</script>

<style>
#nav {
  display: flex;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

#nav a.cut-shop-active-class {
  color: purple;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>