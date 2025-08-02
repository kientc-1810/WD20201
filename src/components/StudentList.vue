<template>
  <div class="container mt-4">
    <button class="btn btn-primary mb-3" @click="$router.push('/create')">
      Thêm sinh viên
    </button>
    <table class="table table-bordered text-center">
      <thead class="table-light">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Student Code</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.studentCode }}</td>
          <td>
            <button class="btn btn-primary btn-sm">Chi tiết</button>
            <button class="btn btn-warning btn-sm">Sửa</button>
            <button class="btn btn-danger btn-sm" @click="deleteStudent(student.id)">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const students = ref([]);
const fetchStudents = async () => {
  const response = await axios.get("http://localhost:3000/students");
  students.value = response.data;
};

const deleteStudent = async (id) => {
  const isConfirmed = confirm("Bạn có muốn xóa không?");
  if (!isConfirmed) return;

  try {
    await axios.delete(`http://localhost:3000/students/${id}`);
    students.value = students.value.filter((student) => student.id !== id);
  } catch (error) {
    console.log("Lỗi khi xóa sinh viên", error);
  }
};

onMounted(fetchStudents);
</script>

<style lang="scss" scoped></style>
