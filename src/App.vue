<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/sendmail">Send Mail</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

*{
  font-family: 'Roboto', sans-serif;
}

html, body{
  background-color: #080e1c;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dbdee0;
  font-family: 'Roboto', sans-serif;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #dbdee0;
    margin-right: 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: red
    }
  }
}
</style>
