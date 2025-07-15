<template>
  <div>
    <!-- Gắn kết nội suy và gắn kết sự kiện -->
    <!-- <h1>Hiển thị tên ban đầu</h1>
    <br />
    <p>Họ và tên: {{ myName }}</p>
    <br />
    <!-- Sau khi ấn nút thì sẽ được đổi thành một tên khác -->
    <!-- <button class="btn btn-success" @click="changeName">Đổi tên</button> -->

    <!-- Đồng bộ 2 chiều -->
    <!-- <h1>Số ban đầu {{ count }}</h1>
    <input type="text" v-model="count" /> -->

    <!-- Gắn kết thuộc tính -->
    <!-- <div v-bind:class="active">{{ content }}</div> -->

    <!-- Gắn kết thuộc tính cho đối tượng -->
    <!-- <div :class="{ active: state.isActive }">Nội dung</div>
    <button @click="toggleActive">Toggle Active</button> -->

    <!-- mảng -->
    <!-- <div :class="[activeClass, errorClass]">{{ message }}</div> -->

    <!-- style binding -->
    <!-- áp dụng với đối tượng -->
    <!-- <div :style="styleObject">HIHI</div> -->

    <!-- áp dụng với điều kiện -->
    <div :style="dynamicStyle">HAHA</div>
  </div>
</template>

<script setup>
// Gắn kết nội suy và gắn kết sự kiện
// import { ref } from "vue";
// const myName = ref("Nguyễn Văn A");
// function changeName() {
//   myName.value = "Hồ Văn B";
// }

// Đồng bộ 2 chiều
// import { ref } from "vue";
// const count = ref(0);

// Gắn kết thuộc tính
// import { ref } from "vue";
// const content = ref("xin chào");

// Gắn kết thuộc tính cho đối tượng
// import { reactive } from "vue";
// const state = reactive({
//   isActive: true,
// });

// function toggleActive() {
//   state.isActive = !state.isActive;
// }

// mảng
// import { ref } from "vue";
// const message = ref("Xin chào cả lớp");
// const activeClass = ref("active");
// const errorClass = ref("text-danger");

// Style binding
// áp dụng với đối tượng
// import { ref } from "vue";
// // khai báo một đối tượng chứa các thuộc tính css
// const styleObject = ref({
//   color: "blue",
//   backgroundColor: "lightgray",
//   fontSize: "20px",
// });

// áp dụng với điều kiện
import { ref, computed } from "vue";
// Trạng thái để điều chỉnh kiểu css
const isActive = ref(false);
// Tạo một thuộc tính css động dựa trên trạng thái
const dynamicStyle = computed(() => ({
  color: isActive.value ? "green" : "red",
  fontSize: isActive.value ? "20px" : "10",
}));
</script>

<style lang="scss" scoped>
// .active {
//   background-color: green;
//   color: white;
//   padding: 10px;
// }

// .active {
//   background-color: green;
//   color: white;
//   padding: 10px;
// }

// .text-danger {
//   color: red;
// }
</style>
