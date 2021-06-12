<template>
  <v-row id="department" style="height: calc(100vh - 64px)">
    <v-col cols="auto">
      <v-navigation-drawer
        permanent
        height="650"
        floating
        style="overflow: auto"
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
      <v-card height="100%">
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
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedDepartment: "",
      department_text: "",
      intro_text: "",
      future_text: "",
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
        this.selectedDepartment = department;
      }
    },
  },
  computed: {
    ...mapGetters(["getterSchoolSystemData"]),
  },
};
</script>
