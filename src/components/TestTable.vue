<template lang="pug">
div
  table
    thead
      tr
        th(v-for="header in tableHeader" :key="header.value") {{ header.text }}
    tbody
      tr(v-for="item in tableData" :key="item.id")
        td(v-for="header in tableHeader" :key="header.value")
          slot(v-if="header.value === 'id'", name="id", :item="item")
          slot(v-if="header.value === 'text'", name="text", :item="item")
          slot(v-if="header.value === 'url'", name="url", :item="item")
</template>

<script>
export default {
  name: "TestTable",
  props: {
    tableHeader: {
      type: Array,
      required: true,
    },
    tableData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
