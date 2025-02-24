<script setup>
import { useUserStore } from '../store/user';

const user = useUserStore();
</script>

<template>
    <span class="text-6xl text-red-500">{{ user.token }}</span>
    <el-button type="primary">Click</el-button>
    <el-icon><House /></el-icon>
</template>

<style scoped></style>