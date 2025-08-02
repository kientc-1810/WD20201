<template>
  <div>
    <h1>Thêm sinh viên</h1>
    <form @submit.prevent="createStudent">
      <input type="text" v-model="student.name" placeholder="Họ và tên" required />
      <input
        type="text"
        v-model="student.studentCode"
        placeholder="Mã sinh viên"
        required
      />
      <button type="submit" class="btn btn-success">Gửi</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const student = ref({ name: "", studentCode: "" });

const createStudent = async () => {
  await axios.post("http://localhost:3000/students", student.value);
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
