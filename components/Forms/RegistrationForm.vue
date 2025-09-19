<template>
  <v-sheet class="mx-auto pa-4" max-width="800px">
    <base-card>
      <div class="d-flex justify-center align-center" v-if="isLoading">
        <v-progress-circular
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <div v-else>
        <h4 class="mb-4">Please Fil Your Details!</h4>
        <v-form @submit.prevent="handleSubmit" ref="formRef">
          <div class="form-wrapper">
            <!-- First Name -->
            <v-text-field
              v-model="firstName"
              :rules="[requiredRule]"
              placeholder="First Name*"
              variant="outlined"
              class="form-control"
            ></v-text-field>

            <!-- Last Name -->
            <v-text-field
              v-model="lastName"
              :rules="[requiredRule]"
              placeholder="Last Name*"
              variant="outlined"
              class="form-control"
            ></v-text-field>
          </div>

          <div class="form-wrapper">
            <!-- Email -->
            <v-text-field
              v-model="email"
              :rules="[requiredRule, emailRule]"
              placeholder="Email*"
              variant="outlined"
              class="form-control"
            ></v-text-field>

            <!-- Product Looking For -->
            <v-select
              v-model="product"
              :items="productItems"
              item-title="title"
              item-value="value"
              :rules="[notPlaceholderRule]"
              variant="outlined"
              class="form-control"
            ></v-select>
          </div>

          <div class="form-wrapper">
            <!-- Phone -->
            <v-text-field
              v-model="phone"
              :rules="[requiredRule, phoneRule]"
              placeholder="Phone*"
              variant="outlined"
              class="form-control"
            ></v-text-field>

            <!-- Country -->
            <v-text-field
              v-model="country"
              :rules="[requiredRule]"
              placeholder="Country"
              variant="outlined"
              class="form-control"
            ></v-text-field>
          </div>

          <!-- Message (optional) -->
          <v-textarea
            v-model="message"
            placeholder="Message (Optional)"
            variant="outlined"
            rows="2"
          ></v-textarea>

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
import { ref } from "vue";
import { useRouter } from "vue-router";
import BaseCard from "../UI/BaseCard.vue";

const formRef = ref(null);
const router = useRouter();
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const product = ref("");
const phone = ref("");
const country = ref("");
const message = ref("");
const isLoading = ref(false);

const productItems = [
  { title: "Product Looking For*", value: "" }, // shows as placeholder, selectable but fails validation
  { title: "Product A", value: "Product A" },
  { title: "Product B", value: "Product B" },
  { title: "Product C", value: "Product C" },
  { title: "Product D", value: "Product D" },
];

// custom validation: disallow the placeholder value
const notPlaceholderRule = (value) =>
  value !== "" || "Please select a product.";

// Validation rules
const requiredRule = (value) => !!value || "This field is required.";
const emailRule = (value) => /.+@.+\..+/.test(value) || "Enter a valid email.";
const phoneRule = (value) =>
  /^[0-9\-\+\s]{6,15}$/.test(value) || "Enter a valid phone number.";

async function handleSubmit() {
  isLoading.value = true;
  let formData = {};
  if (!formRef.value?.validate()) {
    return;
  }
  formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    product: product.value,
    phone: phone.value,
    country: country.value,
    message: message.value,
  };
  try {
    const res = await fetch("api/contact-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    var data = await res.json();
    alert(data.message);
    router.replace("/");
    isLoading.value = false;
  } catch (error) {
    console.error(error);
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
@media (max-width: 767px) {
  .v-form .form-wrapper {
    flex-direction: column;
  }
  .form-control {
    width: 100%;
  }
}
</style>