<template>
  <!-- <div> -->
  <!-- v-if -->
  <!-- ví dụ: xây dựng đoạn code để in ra màn hình kết quả
  nếu sinh viên có điểm >=5 thì qua môn -->
  <!-- <h3>V-IF</h3>
    <div v-if="diem >= 5" class="alert alert-success mt-4" role="alert">Qua môn</div> -->
  <!-- v-else -->
  <!-- bổ sung, nếu như điểm < 5 thì tạch môn -->
  <!-- <div v-else class="alert alert-warning mt-4" role="alert">Tạch môn</div> -->

  <!-- ví dụ -->
  <!-- tạo form đăng nhập nếu mà true thì cho đăng nhập, và có thông báo ra màn hình
    ngược lại sẽ báo không đủ quyền truy cập -->

  <!-- <div class="container mt-5">
      <div v-if="!isLogin" class="login-form">
        <h2>Đăng nhập</h2>
        <input type="text" class="form-control mb-2" placeholder="Tên đăng nhập" />
        <input type="password" class="form-control mb-2" placeholder="Mật khẩu" />
        <button class="btn btn-primary">Đăng nhập</button>
      </div>
      <div v-if="isLogin" class="alert alert-success mt-4" role="alert">
        Chào mừng {{ usename }}! Bạn đã đăng nhập thành công.
      </div> 
    </div>  -->

  <!-- else if -->
  <!-- nếu học sinh đạt điểm >= 8 thì là học sinh giỏi
    nếu học sinh đạt điểm >= 6.5 và < 8 thì là học sinh khá
    nếu học sinh đạt điểm >= 5 và < 6.5 thì là học sinh trung bình
    nếu học sinh đạt điểm < 5 thì là học sinh yếu -->
  <!-- <div class="container">
      <h1>Thông báo loại học sinh:</h1>
      <span v-if="diem >= 8">Giỏi</span>
      <span v-else-if="diem >= 6.5">Khá</span>
      <span v-else-if="diem >= 5">Trung bình</span>
      <span v-else>Yếu</span>
    </div> -->

  <!-- v-show -->
  <!-- ví dụ: tạo ra 1 nút điểm danh, click vào thì điểm danh,
    click lại lần nữa thì vắng mặt -->
  <!-- <div class="container">
      <button @click="diemdanh">{{ trangthai ? "Có mặt" : "Vắng mặt" }}</button>
      <!-- Thông báo  hiển thị nếu mà true thì có mặt và ngược lại -->
  <!-- <div v-show="trangthai" class="alert alert-success" role="alert">Có mặt</div>
      <div v-show="!trangthai" class="alert alert-danger" role="alert">Vắng mặt</div>
    </div>
  </div> -->

  <!-- v-for -->
  <div class="container my-5">
    <!-- dùng v-for để duyệt dữ liệu dạng mảng -->
    <!-- <h1 class="text-primary mb-4">Danh sách món ăn (mảng)</h1> -->
    <!-- áp dụng v-for để in ra danh sách món ăn -->
    <!-- <ul class="list-group mb-4">
      <li class="list-group-item" v-for="item in arr_food" :key="item">{{ item }}</li>
    </ul> -->

    <!-- dùng v-for để duyệt dữ liệu dạng đối tượng -->
    <h4 class="text-success">Danh sách món ăn (đối tượng)</h4>
    <!-- <ul class="list-group">
      <li class="list-group-item" v-for="(price, food, index) in des_food" :key="index">
        {{ index + 1 }} . {{ food }} . {{ price }} USD
      </li>
    </ul> -->

    <!-- dạng áp dụng giỏ hàng -->
    <h4 class="text-warning">Giỏ hàng</h4>
    <table class="table table-bordered table-striped table-hover">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Tên món</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(food, index) in list_food" :key="food.id">
          <td>{{ food.id }}</td>
          <td>{{ food.name }}</td>
          <td>{{ food.price }}</td>
          <td>
            <div class="input-group">
              <button class="btn btn-outline-secondary" @click="descreaseQuantity(index)">
                -
              </button>
              <input
                type="number"
                class="form-control text-center"
                v-model="food.quantity"
                min="0"
              />
              <button class="btn btn-outline-secondary" @click="increaseQuantity(index)">
                +
              </button>
            </div>
          </td>
          <td>{{ food.quantity * food.price }}</td>
        </tr>
      </tbody>
    </table>
    <h3 class="text-end text-success mt-4">
      Tổng tiền: <span class="badge bg-success">{{ totalCart() }} VNĐ</span>
    </h3>
  </div>
</template>

<script setup>
// import { ref } from "vue";
// v-if
// const diem = ref(3);
// const isLogin = ref(true);
// const usename = ref("kientc");
// v-else-if
// const diem = ref(4.9);

// v-show
// khai báo biến theo dõi trạng thái điểm danh
// const trangthai = ref(true);
// // khai báo hàm xử lý trạng thái
// const diemdanh = () => {
//   trangthai.value = !trangthai.value;
// };

// v-for
import { reactive, ref } from "vue";
// tạo mảng dữ liệu về các món ăn
// dạng 1: làm việc với mảng
// const arr_food = reactive(["Phở", "Bún", "Bánh mì", "Cơm rang"]);
// dạng 2: làm việc với đối tượng
// const des_food = reactive({ pizza: 20, bunger: 30, sushi: 50 });
// dạng 3: áp dụng vào giỏ hàng kết hợp hàm xử lý
const list_food = reactive([
  { id: "01", name: "Bún bò", quantity: 0, price: 35000 },
  { id: "02", name: "Phở bò", quantity: 0, price: 45000 },
  { id: "03", name: "Bính mì", quantity: 0, price: 20000 },
  { id: "04", name: "Cơm rang", quantity: 0, price: 30000 },
]);

// xử lý về tăng số lượng
function increaseQuantity(index) {
  list_food[index].quantity++;
}
// xử lý về giảm số lượng
function descreaseQuantity(index) {
  if (list_food[index].quantity > 0) {
    list_food[index].quantity--;
  }
}
// xử lý tính tổng tiền
function totalCart() {
  return list_food.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}
</script>

<style lang="scss" scoped></style>
