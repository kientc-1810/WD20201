<template>
  <div class="container">
    <h1 class="display-4 mb-3">Thông tin khóa học:</h1>
    <ul class="list-group">
      <li class="list-group-item">Tên môn học: {{ name }}</li>
      <li class="list-group-item">Mã môn: {{ idCode }}</li>
      <li class="list-group-item">Mã lớp: {{ idClass }}</li>
      <li class="list-group-item">Trạng thái: {{ active ? "Mở" : "Đóng" }}</li>
    </ul>
  </div>
</template>

<script setup>
const name = "Frontend-framework";
const idCode = "WEB2072";
const idClass = "WD20201";
const active = "true";
</script>

<style lang="scss" scoped></style>
