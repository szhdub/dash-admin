<script setup lang="ts">
import { useScreenPixel } from "@/utils/web";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { sm, md } = useScreenPixel();

const { pkg } = __APP_INFO__;
const { version } = pkg;
</script>

<template>
  <Card auto-height>
    <template #title> {{ t("page.about.info.title") }} </template>
    <template #content>
      <div class="px-5">
        <el-descriptions class="margin-top" :column="sm ? 1 : md ? 2 : 3" border>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">{{ t("page.about.info.version") }}</div>
            </template>
            <el-tag size="small">v{{ version }}</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
