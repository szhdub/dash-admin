<script setup lang="ts">
// id title content
const dataSource = ref([
  {
    id: 1,
    title: "title1",
    content: "content1",
    isOnline: false
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
    isOnline: true
  }
]);
const articleColumns = computed(() => {
  return [
    {
      prop: "id",
      label: "ID",
      width: "80",
      show: true,
      sortable: true
    },
    {
      prop: "title",
      label: "Title",
      width: "180",
      show: true,
      sortable: true
    },
    {
      prop: "content",
      label: "Content",
      show: true,
      sortable: true,
      showOverflowTooltip: true
    }
  ];
});

const tableRowClassName = ({ row, rowIndex }) => {
  if (row.isOnline) {
    return "warning-row";
  } else {
    return "success-row";
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
