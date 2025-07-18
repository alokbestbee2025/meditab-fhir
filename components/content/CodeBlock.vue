<script setup>
import { ref } from 'vue'

const copied = ref(false)

async function copyCode(text) {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => (copied.value = false), 1200)
  } catch (err) {
    console.error('Copy failed:', err)
  }
}
</script>

<template>
  <v-sheet
    elevation="0"
    class="rounded-lg"
    style="position: relative; overflow-x: auto; font-family: monospace; border: 2px solid #cccccc; margin-bottom: 3rem;"
  >
    <!-- Copy Button -->
    <v-btn
      size="x-medium"
      icon
      color="white"
      variant="flat"
      style="position: absolute; top: 20px; right: 30px; z-index: 1; padding: 7px;"
      @click="copyCode($refs.code?.innerText)"
    >
      <v-icon v-if="!copied" color="primary">mdi-content-copy</v-icon>
      <v-icon v-else color="success">mdi-check-circle</v-icon>
    </v-btn>

    <!-- Code Content -->
    <div
      ref="code"
      style="margin: 0; white-space: pre-wrap; word-break: break-word;"
    >
      <slot />
    </div>
  </v-sheet>
</template>