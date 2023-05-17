<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/respices"> Respices</router-link> |
    <router-link to="/login"> MyRespices</router-link> |
    <router-link to="/about"> About</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color:black;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #ffff;
    }

   
  }
}
</style>
