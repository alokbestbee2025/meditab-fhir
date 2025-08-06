<template>
  <main class="main-page-content">
    <!-- Banner Section -->
    <section class="home-banner-section comman-bg-img-props padding-custom-util"></section>

    <!-- Second Section -->
    <section class="info-section comman-bg-img-props padding-custom-util">
      <v-container>
        <v-row class="d-flex justify-center align-center">
          <v-col lg="8" sm="12">
            <p class="text-center">
              {{ home.sections.infoSection.content }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Why Meditab FHIR -->
    <section class="why-meditab-fhir padding-custom-util">
      <v-container max-width="1100px">
        <v-row class="d-flex justify-center align-center" style="margin-bottom: 2rem">
          <v-col lg="8" sm="12">
            <h2 class="text-center heading">
              {{ home.sections.whyMeditab.heading }}
            </h2>
            <p class="text-center">{{ home.sections.whyMeditab.desc }}</p>
          </v-col>
        </v-row>
        <v-row style="margin-bottom: 2rem">
          <v-col cols="12" lg="6" sm="12" class="d-flex justify-center align-center">
            <NuxtImg src="/Home/Powered by AI We’re Ready..png" alt="why Meditab"
              format="webp" class="rounded-lg column-img-util" />
          </v-col>
          <v-col cols="12" lg="6" sm="12" class="d-flex flex-column justify-start align-start">
            <div v-for="(item, index) in home.sections.whyMeditab.items" :key="index" class="mb-4">
              <h4 class="heading">{{ item.subHeading }}</h4>
              <p>{{ item.subPara }}</p>
            </div>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center align-center" style="margin-bottom: 20px">
          <v-col lg="8" sm="12">
            <h2 class="text-center heading">
              {{ home.sections.whoIsItHeading }}
            </h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="4" sm="12" v-for="(item, index) in home.sections.whoIsItItems" :key="index">
            <base-card>
              <v-row>
                <v-col cols="12" lg="4" sm="12">
                  <NuxtImg :src="item.iconLink" width="auto" format="webp"
                    class="rounded-lg icon-img-util" />
                </v-col>
                <v-col cols="12" lg="8" sm="12">
                  <h4 class="heading">{{ item.subHeading }}</h4>
                  <p>{{ item.subPara }}</p>
                </v-col>
              </v-row>
            </base-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- What can you do with it -->
    <section class="what-can-you-do padding-custom-util">
      <v-container max-width="1100px">
        <row style="margin-bottom: 2rem;" class="d-flex justify-center align-center">
          <v-col lg="8" sm="12">
            <h2 class="text-center heading">
              {{ home.sections.whatCanYouDo.heading }}
            </h2>
            <p class="text-center">{{ home.sections.whatCanYouDo.content }}</p>
          </v-col>
        </row>
        <v-row class="">
          <v-col cols="12" lg="3" sm="12" class="box" v-for="(item, index) in home.sections.whatCanYouDo.whatCanYouDoItems" :key="index">
            <h4 class="heading">{{ item.subHeading }}</h4>
            <p>{{ item.subPara }}</p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Powered by AI Section -->
    <section class="why-meditab-fhir padding-custom-util">
      <v-container max-width="1100px">
        <v-row class="d-flex justify-center align-center" style="margin-bottom: 2rem">
          <v-col lg="10" sm="12">
            <h2 class="text-center heading">
              {{ home.sections.poweredByAI.heading }}
            </h2>
            <p class="text-center">{{ home.sections.poweredByAI.content }}</p>
          </v-col>
        </v-row>
        <v-row style="margin-bottom: 2rem">
          <v-col cols="12" lg="7" sm="12" class="d-flex justify-center align-center">
            <NuxtImg src="/Home/Powered by AI We’re Ready..png" width="auto" height="100%" alt="why Meditab"
              format="webp" class="rounded-lg column-img-util" />
          </v-col>
          <v-col cols="12" lg="5" sm="12" class="d-flex flex-column justify-center align-center">
            <ul>
              <li class="mb-4" v-for="(item, index) in home.sections.poweredByAI.poweredByAIItems" :key="index">{{
                item.subPara }}</li>
              <p class="heading">{{ home.sections.poweredByAI.para2 }}</p>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Supported FHIR Resources -->
    <section class="supported-fhir-resources padding-custom-util">
      <v-container max-width="1100px">
        <v-row class="d-flex justify-center align-center" style="margin-bottom: 2rem">
          <v-col lg="10" sm="12">
            <h2 class="text-center heading">
              {{ home.sections.supportedFhir.heading }}
            </h2>
            <p class="text-center">{{ home.sections.supportedFhir.content }}</p>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center align-center" style="margin-bottom: 2rem">
          <v-col cols="6" lg="3" sm="6" class="d-flex flex-column justify-center align-center" v-for="(item, index) in home.sections.supportedFhir.supportedFhirItems.row1" :key="index">
            <NuxtImg :src="item.iconLink" width="auto" height="100%" alt="Icons"
              format="webp" class="rounded-lg mb-3 icon-img-util" />
            <p class="heading">{{ item.subHeading }}</p>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center align-center" style="margin-bottom: 4rem">
          <v-col cols="6" lg="3" sm="6" class="d-flex flex-column justify-center align-center" v-for="(item, index) in home.sections.supportedFhir.supportedFhirItems.row2" :key="index">
            <NuxtImg :src="item.iconLink" width="auto" height="100%" alt="Icons"
              format="webp" class="rounded-lg mb-3 icon-img-util" />
            <p class="heading">{{ item.subHeading }}</p>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center align-center">
          <p class="text-center">{{ home.sections.supportedFhir.para2 }}</p>
        </v-row>
      </v-container>
    </section>

    <!-- Secure by Design Section -->
    <section class="why-meditab-fhir padding-custom-util">
      <v-container max-width="1100px">
        <v-row class="d-flex justify-center align-center" style="margin-bottom: 2rem">
          <v-col lg="10" sm="12">
            <h2 class="text-center heading">
              {{ home.sections.secureDesign.heading }}
            </h2>
            <p class="text-center">{{ home.sections.secureDesign.content }}</p>
          </v-col>
        </v-row>
        <v-row style="margin-bottom: 2rem; max-width: 800px;">
          <v-col lg="7" sm="12" class="d-flex justify-center align-center">
            <NuxtImg src="/Home/Secure by Design.png" width="auto" height="100%" alt="why Meditab"
              format="webp" class="rounded-lg" />
          </v-col>
          <v-col lg="5" sm="12" class="d-flex flex-column justify-center align-start">
            <ul>
              <li class="mb-4" v-for="(item, index) in home.sections.secureDesign.secureDesignItems" :key="index">{{
                item.subPara }}</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </section>


    <!-- What's Next Section -->
    <section class="supported-fhir-resources padding-custom-util">
      <v-container max-width="1100px">
        <v-row class="d-flex justify-center align-center">
          <v-col lg="8" sm="12">
            <h2 class="text-center heading mb-3">
              {{ home.sections.whatNext.heading }}
            </h2>
            <p class="text-center">{{ home.sections.whatNext.content }}</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script setup>
import BaseCard from "~/components/UI/BaseCard.vue";
import homeRaw from "~/main-pages-content/home";
const home = ref(homeRaw);
</script>
