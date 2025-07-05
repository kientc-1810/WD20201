<template>
  <!-- <div>
    <h1>Bộ đếm số lần nhấp chuột</h1>
    <p>Số đếm: {{ count }}</p>
    <button @click="increment">Lượt click</button>
  </div> -->

  <!-- khai báo option API -->
  <!-- <div>
    <h1>Bộ đếm số lần nhấp chuột</h1>
    <p>Số đếm: {{ count }}</p>
    <button @click="increment">Lượt click</button>
  </div> -->

  <!-- <div class="container">
    <h1 class="display-4 mb-3">Thông tin khóa học</h1>
    <ul class="list-group">
      <li class="list-group-item">Mã môn: {{ idCode }}</li>
      <li class="list-group-item">Tên môn: {{ name }}</li>
      <li class="list-group-item">Tên lớp: {{ nameClass }}</li>
      <li class="list-group-item">Trạng thái: {{ isActive ? "Đang mở" : "Đã đóng" }}</li>
    </ul>
  </div> -->

  <!-- khai báo kết hợp ref và reactive -->
  <div class="container my-5">
    <h1 class="display-4 mb-3">Thông tin sinh viên</h1>
    <ul class="list-group">
      <!-- dùng reactive để gọi các trạng thái -->
      <li class="list-group-item">Họ và tên: {{ sinhVien.hoTen }}</li>
      <li class="list-group-item">Tuổi: {{ sinhVien.tuoi }}</li>
      <li class="list-group-item">Năm sinh: {{ sinhVien.namSinh }}</li>
      <li class="list-group-item">Khóa học: {{ sinhVien.khoaHoc }}</li>
      <!-- dùng ref để gọi các trạng thái -->
      <li class="list-group-item">Môn học: {{ monHoc }}</li>
    </ul>
  </div>
</template>

<script setup>
// import { ref } from "vue";
// // khai báo hàng count ban đầu để sử dụng
// const count = ref(0);
// // khai báo hàm xử lý số đếm
// function increment() {
//   count.value++;
// }

// khai báo option API
// export default {
//   data() {
//     return {
//       count: 0,
//     };
//   },
//   methods: {
//     increment() {
//       this.count++;
//     },
//   },
// };

// // khai báo của composition API (phải có setup ở script)
// import { ref } from "vue";
// const count = ref(0);

// // xây dựng hàm định nghĩa tăng giá trị lên 1
// const increment = () => {
//   count.value++;
// };

// khai báo các trạng thái sử dụng ref
// import { ref } from "vue";
// const idCode = ref("WEB2072");
// const name = ref("Frontend-Framework");
// const nameClass = ref("WD20201");
// const isActive = ref("true");

import { ref, reactive } from "vue";
// khai báo các trạng thái sử dụng ref:
const monHoc = ref("Frontend-Framework");
// khai báo các trạng thái sử dụng reactive
const sinhVien = reactive({
  hoTen: "Nguyễn Văn A",
  // hoTen: thuộc tính, Nguyễn Văn A: giá trị của thuộc tính
  tuoi: 20,
  namSinh: 2005,
  khoaHoc: "K20",
});
</script>

<style lang="scss" scoped></style>
