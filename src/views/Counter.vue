<script setup lang="ts">

import counterStore from '../stores/counter';

const store = counterStore();

</script>

<template>

    <div class="d-flex flex-column justify-center align-center" style="gap: 1rem">
    <v-btn class="mt-10" color="primary" @click="store.increment">Counter is {{ store.count}}</v-btn>
    <v-btn color="secondary" icon="mdi-cached" @click="store.$reset"></v-btn>
</div>

</template>