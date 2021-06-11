<template>
  <v-container fluid class="d-flex" style="height: 100%">
    <v-row>
      <v-col cols="auto">
        <v-navigation-drawer
          permanent
          width="256"
          height="650"
          floating
          style="overflow: auto"
        >
          <v-list subheader>
            <v-list-item link v-for="i in 10" :key="i">
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer></v-col
      >
      <v-col>
        <v-card height="100%">
          <v-card-title class="d-flex justify-center text-h4 font-weight-black"
            >護理科</v-card-title
          >
          <v-card-subtitle class="text-h5 mt-2 font-weight-black">
            介紹
          </v-card-subtitle>
          <v-card-text class="text-h6">
            護理科的學生除了需學習基礎醫學科學知識、一般護理技能外，更要融合專業核心價值，強化溝通與團隊合作能力，並培養關懷、倫理、克盡職責的胸懷。
            為因應醫療職場的變化大、需求多，唯有具備醫護資訊能力、醫護術語及專業英文能力，加上終身學習的態度，才能適應未來職場的工作環境。
          </v-card-text>
          <v-card-subtitle class="text-h5 mt-2 font-weight-black">
            未來出路
          </v-card-subtitle>
          <v-card-text class="text-h6">
            未來可從事的職業
            律師、法官、檢察官、書記官、法務人員、國會助理、商標／專利人員、市場調查分析師、報社黨政司法記者、政治相關研究人員、研究助理、外交官、外交領事人員、土地代書、都市計畫技師、各級政府機關公務人員、法務部調查員、國安局情報人員、國際經濟商務人員等。
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
