import { RouteRecordRaw } from "vue-router";

export default {
  name: "alive",
  path: "/alive",
  component: () => import("@/layouts/common-page.vue"),
  meta: { menu: { title: "router.clock", icon: "AlarmClock", hideParent: true } },
  children: [
    {
      name: "clock",
      path: "clock",
      component: () => import("@/views/alive/Clock.vue"),
      meta: { menu: { title: "router.clock" }, keepAlive: true }
    }
  ]
} as RouteRecordRaw;
