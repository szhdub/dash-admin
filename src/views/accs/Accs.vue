<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchAccsColumnInfo, fetchAccsInfo } from "@/api/dash";
import { CTableColumn } from "#/table";

let articleColumns = ref<CTableColumn<any>[]>([]);
let dataSource = ref([]);
const currentPage = ref(1);
const pageSize = ref(18);
const small = ref(false);
const background = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

const fetchAndUpdateData = async () => {
  try {
    //  Column
    const result = await fetchAccsColumnInfo();
    articleColumns.value = result;

    // Accs Info
    const accsResult = await fetchAccsInfo();
    dataSource.value = accsResult.accs;
    console.log("Val", articleColumns.value);
  } catch (error) {
    console.error("Error fetching admin info:", error);
  }
};

onMounted(async () => {
  fetchAndUpdateData();
});

const tableRowClassName = ({ row, rowIndex }: { row: { online: string }; rowIndex: number }) => {
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
        v-if="articleColumns.length > 0"
        :table-data="dataSource.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
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
      <div class="float-right mr-16 p-2">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[18, 100, 200, 500]"
          :small="small"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataSource.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: theme("colors.red.100");
  @apply text-gray-800 dark:hover:text-white;
}
.el-table .success-row {
  --el-table-tr-bg-color: theme("colors.green.100");
  @apply text-gray-800 dark:hover:text-white;
}
</style>
