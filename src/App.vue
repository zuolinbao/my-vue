<template>
  <div id="app">
    <QueryTable></QueryTable>
  </div>
</template>

<script>
import QueryTable from "./components/ct-query-table";

export default {
  name: "App",
  components: {
    QueryTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
