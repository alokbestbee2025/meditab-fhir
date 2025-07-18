<script setup>

const { query } = useDocSearch();
</script>

<template>
  <v-text-field
    v-model="query"
    label="Search docs"
    append-inner-icon="mdi-magnify"
    variant="solo"
    density="compact"
    hide-details
    clearable
    class="custom-search-field"
    style="border: 2px solid #ccc; background-color: transparent; border-radius: 4px;"
  />
</template>