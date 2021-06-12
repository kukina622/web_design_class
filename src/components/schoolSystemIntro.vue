<template>
  <v-row align="center" justify="center" style="height: calc(100vh - 64px)">
    <v-col cols="3" class="mr-3">
      <transition name="flyInto">
        <v-card height="290px" v-show="show">
          <v-row justify="center" class="fill-height">
            <v-col cols="12">
              <v-avatar
                color="white"
                size="100"
                style="border: 5px #2196f3 solid !important"
              >
                <span class="blue--text font-weight-black text-h4">高中</span>
              </v-avatar>
            </v-col>
            <v-col class="pl-6 pr-6 mt-5" cols="12">
              <span class="content_text">
                以教授基礎學科能力為主，高中教育階段僅就學習方向進行大類別分組，學習進路以學術研究為導向。
              </span>
            </v-col>
            <v-col class="d-flex justify-center">
              <v-btn color="primary" href="#department"> 看介紹 </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </transition>
    </v-col>
    <v-col cols="3" class="mr-3">
      <transition name="flyInto">
        <v-card height="290px" v-show="show">
          <v-row justify="center" class="fill-height">
            <v-col cols="12">
              <v-avatar
                color="white"
                size="100"
                style="border: 5px #2196f3 solid !important"
              >
                <span class="blue--text font-weight-black text-h4">高職</span>
              </v-avatar>
            </v-col>
            <v-col class="pl-6 pr-6 mt-5" cols="12">
              <span class="content_text">
                以教授專業學科能力為主，學生於報考高職時即已依據自身興趣及性向選擇就讀科別。
              </span>
            </v-col>
            <v-col class="d-flex justify-center">
              <v-btn color="primary" href="#department"> 看介紹 </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </transition>
    </v-col>
    <v-col cols="3">
      <transition name="flyInto">
        <v-card height="290px" v-show="show">
          <v-row justify="center" class="fill-height">
            <v-col cols="12">
              <v-avatar
                color="white"
                size="100"
                style="border: 5px #2196f3 solid !important"
              >
                <span class="blue--text font-weight-black text-h4">五專</span>
              </v-avatar>
            </v-col>
            <v-col class="pl-6 pr-6 mt-5" cols="12">
              <span class="content_text">
                以教授專業學科能力為主，並強調畢業後就業能力的培養，以學科能力與實作能力並列為主要教學內容。
              </span>
            </v-col>
            <v-col class="d-flex justify-center">
              <v-btn color="primary" href="#department"> 看介紹 </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </transition>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style scoped>
.v-avatar {
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
}
.v-card {
  position: relative;
}
.content_text {
  line-height: 35px;
  text-align: center;
}
.v-btn {
  position: absolute;
  bottom: 15px;
}
a,
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: inherit;
}
.flyInto-enter {
  opacity: 0;
  top: 100px;
}
.flyInto-enter-active {
  transition: all 0.9s ease;
}
.flyInto-enter-to {
  opacity: 1;
  top: 0;
}
.v-avatar span {
  pointer-events: none;
}
</style>
