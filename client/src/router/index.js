import { createWebHistory, createRouter } from "vue-router";
import GdrSettingComponent from "@/components/AhpModel/ModelComponent.vue";
import WeightComponent from "@/components/AhpModel/WeightComponent.vue";
import HomeComponent from "@/components/Home/HomeComponent.vue"

import SearchComponent from '@/components/Mockup/SeachComponent.vue'
import CourseDetail from '@/components/Mockup/CourseDetail.vue'
import ForumComponent from '@/components/Mockup/Forum.vue'
import AdsComponent from '@/components/Mockup/Ads.vue'
import EventsComponent from '@/components/Mockup/Events.vue'

import InsertCourseComponent from "@/components/Admin/InsertCourseComponent.vue";
import CourseComponent from "@/components/Admin/CourseComponent.vue";

const routes = [
  {
    path: "/forum",
    name: "forum",
    component: ForumComponent,
  },
  {
    path: "/ads",
    name: "ads",
    component: AdsComponent,
  },
  {
    path: "/events",
    name: "events",
    component: EventsComponent,
  },
  {
    path: "/",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/model",
    name: "gdr-setting",
    component: GdrSettingComponent,
  },
  {
    path: "/weight",
    name: "weight",
    component: WeightComponent,
    //props: true
  },
  {
    path: "/insert-course",
    name: "insert-course",
    component: InsertCourseComponent,
    meta: {
      title: 'insert-course'
    }
    //props: true
  },
  {
    path: "/course",
    name: "course",
    component: CourseComponent,
    //props: true
  },
  {
    path: "/admin",
    name: "admin",
    component: CourseComponent,
    //props: true
  },
  {
    path: "/search",
    name: "search",
    component: SearchComponent,
    //props: true
  },
  {
    path: "/course-provider",
    name: "course-provider",
    component: CourseDetail,
    //props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;