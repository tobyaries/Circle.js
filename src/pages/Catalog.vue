<template>
  <div class="catalog">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><router-link to="/countdown">Go to Foo</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
  data () {
    return {
      msg: 'CircleUI'
    }
  }
}
</script>

<style> 
html {
  height: 100%;
  background-color: #eee;
}
</style>

<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: medium;
}
h1 {
  color: #51ABAB;
  font-size: x-large;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
