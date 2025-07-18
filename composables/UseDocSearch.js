import { ref } from 'vue';
const query = ref('');
export function useDocSearch() {
  return { query }
}