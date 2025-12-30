<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const data = ref("");
async function apiCall() {
  const res = await axios.get("http://ip-api.com/json/162.120.187.77");
  data.value = res.data.country;
}

onMounted(() => {
  apiCall();
  console.log("HomeView mounted", data.value);
});
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-yellow-200">
    <h1 class="text-red-500 text-4xl">{{ data }}</h1>
  </div>
</template>