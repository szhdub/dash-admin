<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchDashInfo } from "@/api/dash";
import { ServerInfo } from "#/dashType";

let dataSource = ref<ServerInfo[]>([]);
let took = ref(0);
let total = ref(0);
let status = ref("loading...");
const fetchAndUpdateData = async () => {
  try {
    const result = await fetchDashInfo();
    dataSource.value = result.servers;
    took.value = result.took;
    total.value = result.total;
    status.value = result.status;
  } catch (error) {
    console.error("Error fetching admin info:", error);
  }
};

onMounted(async () => {
  // 初始化时执行一次请求
  fetchAndUpdateData();

  // 每5秒执行一次请求
  // setInterval(fetchAndUpdateData, 5000);
});

const articleColumns = computed(() => {
  return [
    {
      prop: "server_id",
      label: "ServerId",
      width: 120,
      show: true,
      sortable: true,
      showOverflowTooltip: true
    },
    {
      prop: "open",
      label: "Open",
      width: 100,
      show: true,
      sortable: true
    },
    {
      prop: "count",
      label: "Accounts",
      width: 120,
      show: true,
      sortable: true,
      showOverflowTooltip: true
    },
    {
      prop: "farmers",
      label: "Farmers",
      width: 120,
      show: true,
      sortable: true,
      showOverflowTooltip: true
    },
    {
      prop: "char_maker",
      label: "Makers",
      width: 120,
      show: true,
      sortable: true,
      showOverflowTooltip: true
    },
    {
      prop: "diamonds",
      label: "Diamonds",
      width: 120,
      show: true,
      sortable: true,
      showOverflowTooltip: true
    },
    {
      prop: "states1",
      label: "ServerName",
      width: 150,
      show: true,
      sortable: true,
      showOverflowTooltip: true
    }
  ];
});
</script>

<template>
  <div class="relative w-full">
    <div class="p-[8px] absolute w-fit">
      <c-table
        :table-data="dataSource"
        :show-header="true"
        :columns="articleColumns"
        header-align="right"
        :row-style="{ height: '26px' }"
        :cell-style="{ padding: '0' }"
        border
        @selection-change="() => {}"
      >
        <template #status>
          <div class="flex gap-2">
            <span>took: {{ took }}</span>
            <span>total: {{ total }}</span>
            <span>status: {{ status }}</span>
          </div>
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
