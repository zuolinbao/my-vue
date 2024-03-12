<template>
  <div>
    <CTForm></CTForm>
    <CTTable></CTTable>
  </div>
</template>

<script>
import CTTable from "../ct-table";
import CTForm from "../ct-form";
export default {
  name: "CTQueryTable",
  components: {
    CTTable,
    CTForm,
  },
};
</script>

<style lang="scss" scoped>
div {
  background-color: $main-color;
}
</style>
