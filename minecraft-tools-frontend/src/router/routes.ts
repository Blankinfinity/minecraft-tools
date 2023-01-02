import { RouteConfig } from "vue-router";

import RoutesNames from "./routesNames";

export const Routes: RouteConfig[] = [
  {
    path: "/",
    name: RoutesNames.home,
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  },
  {
    path: "/about",
    name: RoutesNames.about,
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    meta: {
      anonymousOnly: true
    }
  },
  {
    path: "/contact",
    name: RoutesNames.contact,
    component: () =>
      import(/* webpackChunkName: "authRegister" */ "@/views/Contact.vue"),
    meta: {
      anonymousOnly: true
    }
  },
  {
    path: "/news",
    name: RoutesNames.news,
    component: () =>
      import(
        /* webpackChunkName: "articleCreate" */ "@/views/News.vue"
      ),
    meta: {
      requiresAuth: true
    }
  },
  //{
  //  path: "/editor/:slug",
  //  name: RoutesNames.articleEdit,
  //  component: () =>
  //    import(/* webpackChunkName: "articleEdit" */ "@/views/ArticleEdit.vue"),
  //  meta: {
  //    requiresAuth: true
  //  }
  //},
  //{
  //  path: "/article/:slug",
  //  name: RoutesNames.articleView,
  //  component: () =>
  //    import(/* webpackChunkName: "articleView" */ "@/views/ArticleView.vue")
  //},
  //{
  //  path: "/@:username/:tabId?",
  //  name: RoutesNames.profileIndex,
  //  component: () =>
  //    import(/* webpackChunkName: "profileIndex" */ "@/views/ProfileIndex.vue")
  //},
  //{
  //  path: "/settings",
  //  name: RoutesNames.profileSettings,
  //  component: () =>
  //    import(
  //      /* webpackChunkName: "profileSettings" */ "@/views/ProfileSettings.vue"
  //    ),
  //  meta: {
  //    requiresAuth: true
  //  }
  //},
  {
    path: "*",
    redirect: { name: RoutesNames.home }
  }
];