<template>
  <!-- <v-row dense>
  <v-col cols="12">-->
  <v-card class="mx-auto" max-width="768px">
    <v-img class="white--text align-end" contain src="https://hokori.online/image/about.jpg">
      <v-card-title>这里是Hokori</v-card-title>
    </v-img>
    <v-row class="ma-0 py-3">
      <v-col cols="12" class="pa-0">
        <v-card width="95%" class="mx-auto">
          <!-- 选项按钮 -->
          <v-tabs v-model="tab" background-color="blue-grey lighten-3" color="secondary">
            <v-tab v-for="item in introductions" :key="item.text_cn">{{ item.text_cn }}</v-tab>
          </v-tabs>
          <!-- 选项内容 -->
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in introductions" :key="item.text_cn">
              <v-card flat>
                <v-card-text v-html="item.content"></v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 py-3">
      <v-col cols="12" class="pa-0">
        <footer class="text-overline d-flex justify-center">
          互联网ICP备案：
          <a
            href="http://www.beian.gov.cn"
            target="_blank"
            ondragstart="return false"
          >粤ICP备19141609号</a>
        </footer>
      </v-col>
    </v-row>
  </v-card>
  <!-- </v-col>
  </v-row>-->
</template>

<script>
  import { about, contact, projects } from '@/markdown/index.js';
  export default {
    name: 'Home',
    data() {
      return {
        introductions: [
          {
            text_en: 'about',
            text_cn: '关于我',
            content: about
          },
          {
            text_en: 'contact',
            text_cn: '联系方式',
            content: contact
          },
          {
            text_en: 'projects',
            text_cn: '小项目',
            content: projects
          }
        ],
        tab: null
      };
    },
    methods: {
      renderMarkdown() {
        this.introductions.forEach(item => {
          item.content = this.$markdownIt
            ? this.$markdownIt.render(item.content)
            : item.content;
        });
      }
    },
    created() {
      this.$nextTick(() => {
        this.renderMarkdown();
      });
    }
  };
</script>
<style lang="scss">
</style>