<template>
  <div id="app" class="columns">
    <div class="map column">
        <TheMap></TheMap>
    </div>
    <div class="sidebar column narrow">
        <router-view/>
    </div>
  </div>
</template>
<script>
import TheMap from "./components/TheMap"
export default {
  "name": "app",
  "components": {TheMap}
}
</script>
<style lang="scss">
.columns {
  display: flex;
  flex-direction: row;
  .column {
    display: inline-block;
    flex-grow: 1;
    &.narrow {
      flex-grow: 0;
      flex-shrink: 1;
    }
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* { box-sizing: border-box; }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
