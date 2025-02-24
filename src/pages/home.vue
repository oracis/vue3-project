<script setup>
import { useUserStore } from '../store/user';

const user = useUserStore();
</script>

<template>
    <span>{{ user.token }}</span>
</template>

<style scoped></style>