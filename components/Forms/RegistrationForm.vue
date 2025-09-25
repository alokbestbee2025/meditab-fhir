<template>
  <v-sheet class="mx-auto pa-4" max-width="800px">
    <base-card>
    <terms-and-condition v-model="dialogVisible"></terms-and-condition>
      <div class="d-flex justify-center align-center" v-if="isLoading">
        <v-progress-circular
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <div v-else>
        <h4 class="mb-4">Please Fil Your Details!</h4>
        <v-form class="formSec" @submit.prevent="handleSubmit" ref="formRef">
          <div class="form-wrapper">
            <!-- First Name -->
            <v-text-field
              v-model="companyName"
              :rules="[requiredRule]"
              placeholder="Legal name of the organization:*"
              variant="outlined"
              class="form-control"
            ></v-text-field>

            <!-- Last Name -->
            <v-text-field
              v-model="fullName"
              :rules="[requiredRule]"
              placeholder="Name of the signatory/requestor:*"
              variant="outlined"
              class="form-control"
            ></v-text-field>
          </div>

          <div class="form-wrapper">
            <!-- Email -->
            <v-text-field
              v-model="email"
              :rules="[requiredRule, emailRule]"
              placeholder="Email Address of the signatory/requestor:*"
              variant="outlined"
              class="form-control"
            ></v-text-field>

            <!-- Product Looking For -->
            <v-text-field
              v-model="designation"
              :rules="[requiredRule]"
              placeholder="Designation of signatory/requestor:*"
              variant="outlined"
              class="form-control"
            ></v-text-field>
          </div>

          <div class="form-wrapper">
            <!-- stateType -->
            <v-text-field
              v-model="stateType"
              :rules="[requiredRule]"
              placeholder="State of Formation/Organization:*"
              variant="outlined"
              class="form-control"
            ></v-text-field>

            <!-- entityType -->
            <v-text-field
              v-model="entityType"
              :rules="[requiredRule]"
              placeholder="Entity Type:*"
              variant="outlined"
              class="form-control"
            ></v-text-field>
          </div>

          <!-- Message (optional) -->
          <v-textarea
            v-model="legalAddress"
            :rules="[requiredRule]"
            placeholder="Registered Legal Address:*"
            variant="outlined"
            rows="2"
          ></v-textarea>

          <div class="d-flex align-start justify-start">
            <!-- Checkbox -->
            <v-checkbox :rules="[checkboxRule]" v-model="checked" hide-details class="ma-0 pa-0" />

            <!-- Right-aligned paragraph -->
            <p class="flex-grow-1 ml-5">
              I hereby confirm that I have read, understood, and agree to abide by the <span class="weightedFont" @click="openDialog">terms and conditions of Meditab FHIR</span>, including all policies, guidelines, and obligations associated with its use.
            </p>
          </div>

          <!-- Submit Button -->
          <v-btn
            class="mt-4 mx-auto submit-button"
            type="submit"
            block
            color="primary"
            >Submit</v-btn
          >
        </v-form>
      </div>
      
    </base-card>
  </v-sheet>
</template>

<script setup>
import TermsAndCondition from "./TermsAndCondition.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import BaseCard from "../UI/BaseCard.vue";

const formRef = ref(null);
const router = useRouter();
const companyName = ref("");
const fullName = ref("");
const email = ref("");
const stateType = ref("");
const entityType = ref("");
const legalAddress = ref("");
const designation = ref("");
const checked = ref(false);
const dialogVisible = ref(false);
const isLoading = ref(false);
const openDialog = (() => {
  dialogVisible.value = true;
})
// custom validation: disallow the placeholder value

// Validation rules
const requiredRule = (value) => !!value || "This field is required.";
const emailRule = (value) => /.+@.+\..+/.test(value) || "Enter a valid email.";
const checkboxRule = (value) => value === true || "You must agree to continue.";
async function handleSubmit() {
  isLoading.value = true;

  try {
    const { valid } = await formRef.value?.validate();
    if (!valid) {
      throw new Error("Please Fill the Required Fields");
    }

    // const formData = {
    //   companyName: companyName.value,
    //   fullName: fullName.value,
    //   email: email.value,
    //   designation: designation.value,
    //   stateType: stateType.value,
    //   entityType: entityType.value,
    //   legalAddress: legalAddress.value,
    //   termsStatus: checked.value ? "Agree" : "Not Agree",
    // };

    // const response = await fetch("/api/contact-mail", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // if (!response.ok) {
    //   const errorData = await response.json();
    //   throw new Error(errorData.message || "Submission failed");
    // }

    // const data = await response.json();
    // alert(data.message);
    companyName.value = "";
    email.value="";
    designation.value = "";
    stateType.value = "";
    entityType.value ="";
    legalAddress.value = "";
    checked.value = null;
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Failed to submit form: " + error.message);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
.v-form .form-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 10px;
}
.form-control {
  width: 50%;
}
.submit-button {
  min-width: 200px !important;
}
.dialog-card-util{
  max-width: 70vw;
}
.weightedFont{
  font-weight: 500;
  color: #1e3c61;
  cursor: pointer;
}
.formSec :deep(.v-selection-control) {
  align-items: start !important;
}
@media (max-width: 767px) {
  .v-form .form-wrapper {
    flex-direction: column;
  }
  .form-control {
    width: 100%;
  }
}
</style>