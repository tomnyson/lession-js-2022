//
// use switch case to choose color
// let a = prompt("Nhập tên màu: ");

// switch (a) {
//   case "red":
//     alert("Màu đỏ");
//     break;
//   case "blue":
//     alert("Màu xanh da trời");
//     break;
//   case "green":
//     alert("Màu xanh lá cây");
//   default:
//     alert("Không có màu này");
//     break;
// }

// bai 1

// Viết chương trình nhập từ bàn phím cạnh của một khối lập phương. Tính và xuất thể tích của khối chữ nhật s=a*a*a
// let a = prompt("Nhập cạnh của khối lập phương: ");
// let s = a * a * a;
// alert("Thể tích của khối lập phương là: " + s);
// bai 2

// Viết chương trình cho phép giải phương trình bậc nhất trong đó các hệ số a và b nhập từ bàn phím ax +b =0

// let a = prompt("Nhập hệ số a: ");
// let b = prompt("Nhập hệ số b: ");

// let x = 0;

// alert("Kết quả: x= " + (x = -b / a));

// bai 3

// nhập vào 3 số d, c, e tìm giá trị lớn nhất

// let d = prompt("Nhập số d: ");
// let c = prompt("Nhập số c: ");
// let e = prompt("Nhập số e: ");
// let max = 0;

// if (d > c && d > e) {
//   max = d;
// } else if (c > d && c > e) {
//   max = c;
// } else {
//   max = e;
// }

// alert("Giá trị lớn nhất là: " + max);

// bai 4
// Viết chương trình cho phép giải phương trình bậc hai trong đó các hệ số a, b và c nhập từ bàn phím

// let a = prompt("Nhập hệ số a: ");
// let b = prompt("Nhập hệ số b: ");
// let c = prompt("Nhập hệ số c: ");
// let delta = b * b - 4 * a * c;
// let x1 = 0;
// let x2 = 0;

// if (delta < 0) {
//   alert("Phương trình vô nghiệm");
// } else if (delta == 0) {
//   x1 = -b / (2 * a);
//   alert("Phương trình có nghiệm kép x1=x2=" + x1);
// } else {
//   x1 = (-b - Math.sqrt(delta)) / (2 * a);
//   x2 = (-b + Math.sqrt(delta)) / (2 * a);
//   alert("Phương trình có 2 nghiệm phân biệt x1= " + x1 + " và x2= " + x2);
// }

// bai 5
// Nhập tên sản phẩm,số lượng và đơngiá. Tính tiền và thuế giá trị gia tăng phải trả, biết: a. tiền=sốlượng*đơngiá b. thuế giá trị gia tăng = 10% tiền

// let tenSanPham = prompt("Nhập tên sản phẩm: ");
// let soLuong = prompt("Nhập số lượng: ");
// let donGia = prompt("Nhập đơn giá: ");
// let tien = soLuong * donGia;
// let thueGTGT = 0.1 * tien;
// alert(
//   "Tên sản phẩm: " +
//     tenSanPham +
//     "\nSố lượng: " +
//     soLuong +
//     "\nĐơn giá: " +
//     donGia +
//     "\nTiền: " +
//     tien +
//     "\nThuế GTGT: " +
//     thueGTGT
// );
