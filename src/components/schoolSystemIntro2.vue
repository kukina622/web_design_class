<template>
  <v-row align="center" justify="center" style="height: calc(100vh - 64px)">
    <v-col cols="10" class="d-flex align-start">
      <v-avatar
        color="white"
        size="124"
        style="border: 4px #2196f3 solid !important"
      >
        <span class="blue--text font-weight-black text-h3">高中</span>
      </v-avatar>
      <v-alert
        class="d-inline-block text-h4 content ml-1"
        border="left"
        colored-border
        color="blue"
        light
        height="120"
      >
        以教授基礎學科能力為主，高中教育階段僅就學習方向進行大類別分組，學習進路以學術研究為導向。
      </v-alert>
    </v-col>
    <v-col cols="10" class="d-flex align-start">
      <v-avatar
        color="white"
        size="124"
        style="border: 4px #2196f3 solid !important"
      >
        <span class="blue--text font-weight-black text-h3">高職</span>
      </v-avatar>
      <v-alert
        class="d-inline-block text-h4 content ml-1"
        border="left"
        colored-border
        color="blue"
        light
        height="120"
      >
        以教授專業學科能力為主，學生於報考高職時即已依據自身興趣及性向選擇就讀科別。
      </v-alert>
    </v-col>
    <v-col cols="10" class="d-flex align-start">
      <v-avatar
        color="white"
        size="124"
        style="border: 4px #2196f3 solid !important"
      >
        <span class="blue--text font-weight-black text-h3">五專</span>
      </v-avatar>
      <v-alert
        class="d-inline-block text-h4 content ml-1"
        border="left"
        colored-border
        color="blue"
        light
        height="120"
      >
        以教授專業學科能力為主，並強調畢業後就業能力的培養，以學科能力與實作能力並列為主要教學內容。
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  opacity: 0;
  transition: all 0.5s;
}
.v-avatar:hover ~ .content {
  opacity: 1;
}
.content:hover {
  opacity: 1;
}
.v-avatar span {
  pointer-events: none;
}
</style>
