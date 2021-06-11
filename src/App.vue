<template>
  <v-app>
    <v-app-bar app color="#00ACC1">
      <v-app-bar-title class="font-weight-black white--text">
        智慧教育 升學規劃
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn-toggle mandatory group color="white">
        <v-btn width="65px" class="font-weight-black white--text">高中</v-btn>
        <v-btn width="65px" class="font-weight-black white--text">高職</v-btn>
        <v-btn width="65px" class="font-weight-black white--text">五專</v-btn>
      </v-btn-toggle>
    </v-app-bar>
    <v-main>
      <departmentIntro />
    </v-main>
  </v-app>
</template>

<script>
import departmentIntro from "@/components/departmentIntro";
export default {
  name: "App",
  components: {
    departmentIntro,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: "微軟正黑體";
}
</style>
