<template>
  <v-row id="department">
    <v-col cols="auto">
      <v-navigation-drawer
        :height="windowWidth >= 800 ? '650' : '100%'"
        :app="windowWidth < 800"
        v-model="drawer"
      >
        <v-list nav>
          <v-list-item-group color="#4FC3F7" mandatory>
            <v-list-item
              link
              v-for="eachData in getterSchoolSystemData"
              :key="eachData.department"
              @click="changeDepartment(eachData.department)"
            >
              <v-list-item-title>{{ eachData.department }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer></v-col
    >
    <v-col>
      <v-card height="100%" style="position: relative">
        <v-card-title class="d-flex justify-center text-h4 font-weight-black">
          {{ department_text === "" ? "科系" : department_text }}
        </v-card-title>
        <v-card-subtitle class="text-h5 mt-2 font-weight-black">
          介紹
        </v-card-subtitle>
        <v-card-text class="text-h6">
          {{ intro_text }}
        </v-card-text>
        <v-card-subtitle class="text-h5 mt-2 font-weight-black">
          未來出路
        </v-card-subtitle>
        <v-card-text class="text-h6">
          {{ future_text }}
        </v-card-text>
        <div class="d-flex justify-end">
          <img :src="d_image" class="d_img" />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["windowWidth"],
  data() {
    return {
      selectedDepartment: "",
      department_text: "",
      intro_text: "",
      future_text: "",
      d_image: require("../assets/department/觀光事業科.jpg"),
      drawer: true,
    };
  },
  methods: {
    changeDepartment(department) {
      if (this.selectedDepartment !== department) {
        let dataObj = this.getterSchoolSystemData.find(
          (x) => x.department === department
        );
        this.department_text = dataObj.department;
        this.intro_text = dataObj.intro;
        this.future_text = dataObj.future;
        this.d_image = require(`../assets/department/${dataObj.img}`);
        this.selectedDepartment = department;
      }
      if (this.windowWidth < 800) {
        this.drawer = false;
      }
    },
  },
  computed: {
    ...mapGetters(["getterSchoolSystemData"]),
  },
  watch: {
    windowWidth(newVal) {
      if (newVal >= 800) {
        this.drawer = true;
      } else if (newVal < 800) {
        this.drawer = false;
      }
    },
  },
  mounted() {
    this.$bus.$on("openDrawer", () => {
      this.drawer = true;
    });
  },
};
</script>

<style scoped>
.d_img {
  position: absolute;
  height: 30%;
  right: 0;
  bottom: 0;
}
@media (max-width: 1100px) {
  .d_img {
    position: static;
  }
}
</style>
