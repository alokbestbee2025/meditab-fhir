<template>
  <v-list density="compact" nav class="pa-0 mt-4">
    <v-list-item
      v-for="item in filteredNav"
      :key="item.path"
      :to="item.path"
      link
      exact
      class="fhir-navbar-item"
    >
      <v-list-item-title>
        {{ item.title?.toUpperCase() || '(UNTITLED)' }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { computed } from 'vue'
import { useDocSearch } from '~/composables/useDocSearch'

const { data: nav } = await useAsyncData('docs-nav', () =>
  queryCollectionNavigation('docs')
)

const navBar = computed(() => nav.value?.[0]?.children || [])

const { query } = useDocSearch()

const filteredNav = computed(() => {
  if (!query.value) return navBar.value
  return navBar.value.filter(item =>
    item.title?.toLowerCase().includes(query.value.toLowerCase())
  )
})
</script>
