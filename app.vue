<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<style>
/* Example: global scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}


/* Add these styles to restore list formatting */
.markdown-content ol {
    padding-left: 2rem !important;
    margin: 1rem 0 !important;
}

.markdown-content ol ol {
    margin: 0.5rem 0 !important;
}

.markdown-content li {
    margin: 0.25rem 0 !important;
}
</style>
