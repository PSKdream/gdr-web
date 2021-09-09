import { createWebHistory, createRouter } from "vue-router";
import GdrSettingComponent from "@/components/GdrSettingComponent.vue";
import WeightComponent from "@/components/WeightComponent.vue";
import InsertCourseComponent from "@/components/InsertCourseComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue"
import CourseComponent from "@/components/Course/CourseComponent.vue";
import SearchComponent from '@/components/SeachComponent.vue'
import CourseDetail from '@/components/CourseDetail.vue'

const routes = [
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
    //props: true
  },
  {
    path: "/course",
    name: "course",
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
  history: createWebHistory(),
  routes,
});

export default router;