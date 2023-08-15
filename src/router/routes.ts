import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    name: "AccsPage",
    redirect: { name: "Accs" },
    component: () => import("@/layouts/common-page.vue"),
    meta: { menu: { title: "router.accs", icon: "Postcard", hideParent: true } },
    children: [
      {
        path: "accs",
        name: "Accs",
        meta: { menu: { title: "router.accs" } },
        component: () => import("@/views/accs/Accs.vue")
      }
    ]
  },
  {
    path: "/",
    name: "DashPage",
    component: () => import("@/layouts/common-page.vue"),
    meta: { menu: { title: "router.dashboard", icon: "Monitor", hideParent: true, sort: -5 } },
    children: [
      {
        path: "dash",
        name: "Dash",
        meta: { menu: { title: "router.dashboard" } },
        component: () => import("@/views/dash/Dash.vue")
      }
    ]
  },
  {
    path: "/",
    name: "MitmPage",
    component: () => import("@/layouts/common-page.vue"),
    meta: { menu: { title: "router.mitm", icon: "Operation", hideParent: true } },
    children: [
      {
        path: "mitm",
        name: "Mitm",
        meta: { menu: { title: "router.mitm" } },
        component: () => import("@/views/mitm/Mitm.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "LoginPage",
    meta: { guest: true },
    component: () => import("@/views/auth/LoginPage.vue")
  },
  {
    path: "/:any(.*)",
    name: "notFound",
    component: () => import("@/views/errors/404.vue")
  }
] as RouteRecordRaw[];

export default routes;
