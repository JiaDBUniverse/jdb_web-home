<template>
    <h1>Vue 组件测试{{num}}</h1>
    <button @click="num++">测试</button>
</template>
<script setup lang="ts">

import { ref } from 'vue';

    const num = ref(0)
</script>