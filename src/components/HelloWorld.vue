<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
const msg = ref("欢迎来到艾萨音乐盒！")
</script>

<template>
  <h1>{{ msg }}</h1>
  <q-btn color="primary" @click="count++">点击次数{{count}}</q-btn>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
