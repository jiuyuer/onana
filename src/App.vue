<template>
  <div class="mx-30px">
    <el-button @click="toggleDark()">
      <Icon :icon="isDark ? 'circum:dark' : 'carbon:sun'"></Icon>
      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </el-button>
    <div class="content my-30px">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
const isDark = useDark();
const toggleDark = useToggle(isDark);
const title = useTitle('Set title');
const theme = ref(isDark.value ? 'dark' : 'light');
watch(isDark, () => {
  theme.value = isDark.value ? 'dark' : 'light';
  title.value = isDark.value ? '🌙 Good evening!' : '☀️ Good morning!';
});

useHead({
  title: 'CSS那些事儿',
  titleTemplate: title => `${title} | 施晓峰的博客`,
  meta: [
    { name: 'description', content: 'Hello World' },
    { name: 'keywords', content: 'shi,xiao,feng' }
  ]
});
</script>
<style>
.title {
  color: var(--title-color);
  background: var(--title-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 70px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0 auto;
}
</style>
