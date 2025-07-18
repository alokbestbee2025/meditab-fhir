<template>
  <nav class="toc-container">
    <ul>
      <li
        v-for="link in flatToc"
        :key="link.id"
        :class="{ active: activeId === link.id }"
      >
        <a @click.prevent="scrollTo(link.id)" :href="'#' + link.id">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  toc: {
    type: Array,
    required: true
  }
})

const activeId = ref(null)

const flatToc = computed(() => {
  const flatten = (items) =>
    items.flatMap(item => [item, ...(item.children || [])])
  return flatten(props.toc)
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
          break
        }
      }
    },
    {
      rootMargin: '0px 0px -80% 0px',
      threshold: 0.1
    }
  )

  flatToc.value.forEach(link => {
    const el = document.getElementById(link.id)
    if (el) observer.observe(el)
  })
})

function scrollTo(id) {
  activeId.value = id
  const el = document.getElementById(id)
  if (el) {
    const offset = 70
    const y = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>


<style scoped>
.toc-container {
  position: sticky;
  top: 100px;
  padding: 1rem;
  font-size: 0.95rem;
}

.toc-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 4px solid #ddd;
  border-radius: 2px;
}

.toc-container li {
  margin: 0.25rem 0;
  padding-left: 1rem;
  position: relative;
}

.toc-container li.active::before {
  content: "";
  position: absolute;
  left: -4px;
  top: 4px;
  width: 4px;
  height: 1.4rem;
  background-color: #0d3b66; /* change to your theme color */
  border-radius: 2px;
}

.toc-container a {
  text-decoration: none;
  color: #555;
  transition: color 0.2s ease;
}

.toc-container li.active a {
  font-weight: 600;
  color: #0d3b66;
}
</style>
