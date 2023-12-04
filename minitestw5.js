// bai1
// function xoaPhanTu(arr, giaTriCanXoa) {
//     const index = arr.indexOf(giaTriCanXoa);
//     if (index !== -1) {
//         arr.splice(index, 1);
//     }
//     return arr;
// }
//
// // Sử dụng hàm
// let mang = [1, 2, 3, 4, 5];
// let giaTriCanXoa = 3;
// let mangMoi = xoaPhanTu(mang, giaTriCanXoa);
// console.log("Mảng mới sau khi xoá:", mangMoi);

//bai2
// function tinhDiemTrungBinh(diemToan, diemTA, diemVan) {
//     let diemTB = (diemToan + diemTA + diemVan) / 3;
//     let danhGia = "";
//
//     if (diemTB < 5) {
//         danhGia = "Không đạt";
//     } else if (diemTB < 8) {
//         danhGia = "Đạt";
//     } else {
//         danhGia = "Tốt";
//     }
//
//     return { diemTB, danhGia };
// }
//
// let ketQua = tinhDiemTrungBinh(7, 8, 9);
// console.log("Điểm trung bình:", ketQua.diemTB);
// console.log("Đánh giá:", ketQua.danhGia);
// bai3
// class Customer {
//     constructor(name, age, point) {
//         this.name = name;
//         this.age = age;
//         this.point = point;
//     }
//     tinhKhuyenMai() {
//         if (this.point > 100) {
//             console.log("Giảm giá 5%");
//         } else {
//             console.log("Không giảm giá");
//         }
//     }
// }
//
// let customer1 = new Customer("John", 25, 120);
// let customer2 = new Customer("Alice", 30, 80);
//
// customer1.tinhKhuyenMai();
// customer2.tinhKhuyenMai();
// bai4
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     tinhChuVi() {
//         return 2 * (this.width + this.height);
//     }
//
//     tinhDienTich() {
//         return this.width * this.height;
//     }
//
//     veHinh() {
//        let canvas = document.getElementById("myCanvas");
//         let ctx = canvas.getContext("2d");
//
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.rect(0, 0, this.width, this.height);
//         ctx.stroke();
//     }
// }
//
// let hinhChuNhat1 = new Rectangle(5, 10);
// let hinhChuNhat2 = new Rectangle(8, 6);
//
// console.log("Chu vi hình chữ nhật 1:", hinhChuNhat1.tinhChuVi());
// console.log("Diện tích hình chữ nhật 2:", hinhChuNhat2.tinhDienTich());
//
// hinhChuNhat1.veHinh();
// bai5
// function kiemTraSoNguyenTo(number) {
//     if (number <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function demSoNguyenToTrongMang(arr) {
//     let dem = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (kiemTraSoNguyenTo(arr[i])) {
//             dem++;
//         }
//     }
//     return dem;
// }
//
// let mangSoNguyen = [2, 4, 7, 9, 11, 13];
// let soNguyenToTrongMang = demSoNguyenToTrongMang(mangSoNguyen);
// console.log("Số lượng số nguyên tố trong mảng:", soNguyenToTrongMang);
//

