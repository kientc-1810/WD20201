<template>
  <div>
    <h1>Sửa</h1>
    <form @submit.prevent="updateStudent">
      <label>Họ và tên</label>
      <input v-model="student.name" required /><br />
      <label>Mã sinh viên</label>
      <input v-model="student.studentCode" required /><br />
      <button type="submit" class="btn btn-primary">Cập nhật</button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const student = ref({ name: "", studentCode: "" });

onMounted(async () => {
  const response = await axios.get(`http://localhost:3000/students/${route.params.id}`);
  student.value = response.data;
});

const updateStudent = async () => {
  await axios.put(`http://localhost:3000/students/${route.params.id}`, student.value);
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
