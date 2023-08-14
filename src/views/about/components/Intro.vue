<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <Card auto-height>
    <template #title> {{ t("page.about.intro.title") }} </template>
    <template #content>
      <div class="px-5">
        <p class="text-gray-400">使用vue3.2+vite4+Element-Plus+TypeScript+Tailwind开发。</p>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
