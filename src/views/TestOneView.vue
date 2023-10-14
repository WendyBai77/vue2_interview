<template lang="pug">
.test
  TestTable(:table-header="tableHeader" :table-data="tableData")
    template(v-slot:id='{ item }')
      span {{ item.id }}
    template(v-slot:text='{ item }')
      span {{ item.text }}
    template(v-slot:url='{ item }')
      a(:href='item.url' target='_blank') {{ getLinkText }}
</template>

<script>
import TestTable from "@/components/TestTable.vue";
import { mapState } from "vuex";
import { table_header } from "@/table.js";

export default {
  name: "TestOneView",
  components: {
    TestTable,
  },
  data() {
    return {
      tableHeader: table_header,
      tableData: [],
    };
  },
  computed: {
    // 在maptState前加module名的字串，可指定對應module名稱
    ...mapState("homework", ["table_data"]),
    getLinkText() {
      const header = this.tableHeader.find((h) => h.value === "url");
      return header ? header.text : "連結";
    },
  },
  // 由Vuex(mapState) 在生命週期創建時替換 TestOneView data -> tableData
  mounted() {
    this.tableData = this.table_data;
  },
};
</script>
