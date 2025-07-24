<template>
  <div>
    <!-- @click -->
    <!-- <button @click="increment">Tăng số: {{ couter }}</button> -->

    <!-- @submit -->
    <!-- <form @submit.prevent="formHandler">
      <button type="submit">Gửi</button>
    </form> -->

    <!-- @keyup -->
    <!-- <input
      type="text"
      placeholder="Nhấn Enter để gửi dữ liệu"
      @keyup.enter="submitForm"
    /> -->

    <!-- Phần 2: form binding -->
    <!-- input text -->
    <!-- <input type="text" v-model="message" placeholder="Nhập nội dung" />
    <p>Nội dung bạn đã nhập: {{ message }}</p> -->

    <!-- multiline text -->
    <!-- <span>Để lại góp ý của bạn: </span>
    <textarea v-model="feedback" placeholder="Nội dung ...."></textarea>
    <p>Góp ý của bạn là: {{ feedback }}</p> -->

    <!-- checkbox -->
    <!-- <label>
      <input type="checkbox" v-model="isCheck" />
      Chấp nhận điều khoản
    </label>
    <p>Trạng thái: {{ isCheck ? "Đã chấp nhận" : "Chưa chấp nhận" }}</p> -->

    <!-- multi checkbox -->
    <!-- <input type="checkbox" value="HTML" v-model="tenMon" />HTML<br />
    <input type="checkbox" value="PHP2" v-model="tenMon" />PHP2<br />
    <input type="checkbox" value="JScb" v-model="tenMon" />JS cơ bản<br />
    <input type="checkbox" value="FEFW" v-model="tenMon" />Frontend-Framework<br />
    <input type="checkbox" value="C" v-model="tenMon" />C#<br />
    <p>Ngôn ngữ bạn chọn: {{ tenMon.join(", ") }}</p> -->

    <!-- select-option -->
    <!-- <label>Chọn ngôn ngữ lập trình: </label>
    <select id="language" v-model="chuyenNganh">
      <option value="" selected>Chọn chuyên ngành của bạn</option>
      <option value="Backend" selected>Chuyên ngành backend - PHP</option>
      <option value="Frontend" selected>Chuyên ngành frontend - JS</option>
      <option value="Game" selected>Chuyên ngành Game - C#</option>
    </select>
    <p>Chuyên ngành đã chọn: {{ chuyenNganh }}</p> -->

    <!-- radio -->
    <input type="radio" id="red" value="Red" v-model="mauSac" />
    <label for="red">Đỏ</label><br />
    <input type="radio" id="green" value="Green" v-model="mauSac" />
    <label for="green">Xanh</label><br />
    <input type="radio" id="yellow" value="Yellow" v-model="mauSac" />
    <label for="yellow">Vàng</label><br />
    <p>Màu bạn chọn là: {{ mauSac }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
// @click
// inline
// const couter = ref(0);
// method
// const increment = () => {
//   couter.value++;
// };

// @submit
// function formHandler(event) {
//   event.preventDefault();
//   console.log("Form đã được gửi");
// }

// @keyup
// const submitForm = () => {
//   console.log("Form đã được gửi đi");
// };

// phần 2: form binding
// input text
// const message = ref("");

// multiline text
// const feedback = ref("");

// checkbox
// const isCheck = ref(false);

// multi checkbox
// const tenMon = ref([]);

// select-option
// const chuyenNganh = ref("");

// raido
const mauSac = ref("Red");
</script>

<style lang="scss" scoped></style>
