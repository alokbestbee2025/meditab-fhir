<script setup>
defineProps({
  headers: {
    type: Array,
    required: true
  },
  rows: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="overflow-x-auto rounded border border-gray-300">
    <table class="min-w-full divide-y divide-gray-200 text-sm text-left">
      <thead class="bg-gray-100 text-gray-700">
        <tr>
          <th v-for="header in headers" :key="header" class="px-4 py-2 whitespace-nowrap">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr v-for="(row, i) in rows" :key="i">
          <td v-for="(cell, j) in row" :key="j" class="px-4 py-2 whitespace-nowrap">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* Optional responsive tweaks */
table {
  width: 100%;
  margin-bottom: 1.5rem !important;
}
</style>
