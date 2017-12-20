<template>
  <div class="catalog">
    <h1>{{ msg }}</h1>
    <h2>Basic Components</h2>
    <ul>
      <li><router-link to="/countdown">Go to moon-count-down</router-link></li>
      <li><router-link to="/infinitescroll">Go to moon-infinite-scroll</router-link></li>
      <li><router-link to="/picker">Go to moon-picker</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
  data () {
    return {
      msg: 'MoonUI'
    }
  }
}
</script>

<style> 
html {
  height: 100%;
}
</style>

<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: medium;
  padding: 8px;
}
h1 {
  color: #51ABAB;
  font-size: x-large;
}
ul {
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
}
li {
  margin: 0 10px;
  text-align: center;
  overflow: hidden;
  padding: 10px;
  border-top: 1px solid #ddd;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
