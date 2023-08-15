<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useFetchAndUpdateData } from "./useFetchAndUpdateData";

const dataSource = ref([
  {
    uuid: 1,
    level: "level1",
    server_id: "server_id1",
    online: "ingame"
  },
  {
    uuid: 2,
    level: "title2",
    server_id: "server_id2",
    online: "false"
  }
]);

const { articleColumns, fetchAndUpdateData } = useFetchAndUpdateData();
console.log("articleColumns", articleColumns.value);

onMounted(async () => {
  await fetchAndUpdateData();
});

const tableRowClassName = ({ row }) => {
  if (row.online === "ingame") {
    return "success-row";
  } else {
    return "warning-row";
  }
};
</script>

<template>
  <div class="relative w-full">
    <div class="p-[8px] absolute w-full">
      <c-table
        :table-data="dataSource"
        :show-header="true"
        :columns="articleColumns"
        header-align="right"
        border
        style="width: 100%"
        @selection-change="() => {}"
        :row-class-name="tableRowClassName"
      >
        <template #status>
          <div>total: 100</div>
        </template>
        <template #options>
          <el-button icon="refresh" @click="fetchAndUpdateData" circle />
        </template>
      </c-table>
    </div>
  </div>
</template>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: theme("colors.red.100");
}
.el-table .success-row {
  --el-table-tr-bg-color: theme("colors.green.100");
}
</style>
