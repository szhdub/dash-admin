<script setup lang="ts">
// id title content
const dataSource = ref([
  {
    serverId: 1,
    open: "title1",
    accounts: "content1"
  },
  {
    serverId: 2,
    open: "title2",
    accounts: "content2"
  }
]);
const articleColumns = computed(() => {
  return [
    {
      prop: "serverId",
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
      prop: "accounts",
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
      prop: "makers",
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
      prop: "serverName",
      label: "ServerName",
      width: 150,
      show: true,
      sortable: true,
      showOverflowTooltip: true
    }
  ];
});

const tableRowClassName = ({ row, rowIndex }) => {
  if (row.isOnline) {
    return "warning-row";
  } else if (row.isOnline == false) {
    return "success-row";
  } else {
    return "";
  }
};

// const myRowStyle = ({ row, rowIndex }) => {
//   console.log("Row", row);
// };
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
        :row-class-name="tableRowClassName"
      >
        <template #status>
          <div>total: 100</div>
        </template>
        <template #options>
          <el-button icon="refresh" circle />
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
