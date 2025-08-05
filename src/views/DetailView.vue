<template>
  <div class="container">
    <div class="card p-4 shadow">
      <h2 class="text-center">Chi tiết sinh viên</h2>
      <p><strong>ID:</strong>{{ student.id }}</p>
      <p><strong>Họ và tên:</strong>{{ student.name }}</p>
      <p><strong>Mã sinh viên:</strong>{{ student.studentCode }}</p>
      <button @click="$router.push('/')" class="btn btn-secondary">Quay lại</button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const student = ref({});

onMounted(async () => {
  const response = await axios.get(`http://localhost:3000/students/${route.params.id}`);
  student.value = response.data;
});
</script>

<style lang="scss" scoped></style>
