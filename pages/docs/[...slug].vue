<template>
  <v-container fluid class="markdown-content pa-0" style="width: 100%;">
    <v-row>
      <!-- Static Left Sidebar (Visible only on desktop) -->
      <v-col
        cols="2"
        class="left-sidebar-col d-none d-lg-block"
      >
        <div class="sticky-holder">
          <SearchBar />
          <Navbar class="left-sidebar" :toc="toc" />
        </div>
      </v-col>

      <!-- Main Content + TOC -->
      <v-col cols="12" lg="10">
        <v-row v-if="doc" class="px-4">
          <v-col cols="12" lg="9" style="padding-bottom: 10%;" class="markdown-rendered-content">
            <ContentRenderer :value="doc.body ?? doc" />
          </v-col>
          <v-col cols="12" lg="3">
            <div class="right-sidebar">
              <TocContent :toc="toc" />
            </div>
          </v-col>
        </v-row>
        <div v-else>
          No document found for <code>{{ slug }}</code>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data: doc } = await useAsyncData(`doc-${slug}`, () =>
  queryCollection("docs").path(`/docs/${slug}`).first()
);

const toc = computed(() => doc.value?.body?.toc?.links || []);
import TocContent from "~/components/UI/TocContent.vue";
import Navbar from "~/components/Navbar.vue";
import SearchBar from "~/components/SearchBar.vue";
console.log("I am pushing changes....");
</script>


<style scoped>
.left-sidebar-col {
  min-height: 100vh;
  position: sticky;
  top: 64px;
  padding: 15px 15px 15px 25px !important;
  background-color: rgb(var(--v-theme-leftSidebar));
}
.sticky-holder {
  position: sticky;
  top: 12%;
  height: calc(100vh - 64px);
  overflow-y: auto;
}
.right-sidebar {
  position: sticky;
  top: 12%;
}
.left-sidebar {
  background: transparent;
}
.markdown-content ol {
  padding-left: 2rem !important;
  margin: 1rem 0 !important;
}
.markdown-content ol ol {
  margin: 0.5rem 0 !important;
}
.markdown-content li {
  margin: 0.25rem 0 !important;
  list-style-type: decimal !important;
}
</style>
