// alert("xin chao");

//năm Sinh
// let namsinh = prompt("Nhập Năm Sinh Của Bạn");
//     const b = 2021;
//     console.log("namsinh" , namsinh);
//     const tong = b - Number(namsinh);
//     console.log("tong", tong);
//     alert("Số Tuổi Của Bạn là :" + tong);

// Công thức tính chu vi DT hình chữ nhật
//(a+b)*2  chu vi
// a*b diện tích

// let ChieuDai = prompt("Nhập Chiều Dài :");
// let ChieuRong = prompt("Nhập Chiều Rộng :");
// console.log("ChieuDai" , ChieuDai);
// console.log("ChieuRong" , ChieuRong);
// const tong = (Number(ChieuRong) + Number(ChieuDai) * 2);
// const tong1 = (Number(ChieuRong) * Number(ChieuDai));
// console.log("tong", tong);
// console.log("tong1", tong1);
// alert("Chu Vi là :" + tong);
// alert("Diện Tích là :" + tong1);

//Công thức tính diện tích hình thang
//S = (a+b)/2 *h

// let ChieuDai = prompt("Nhập Chiều Dài :");
// let ChieuRong = prompt("Nhập Chiều Rộng :");
// let ChieuCao = prompt("Nhập Chiều Cao :");
// console.log("ChieuDai" , ChieuDai);
// console.log("ChieuRong" , ChieuRong);
// console.log("ChieuCao" , ChieuCao);
// const DienTich = ((Number(ChieuDai)+Number(ChieuRong))/2*Number(ChieuCao));
// console.log("DienTich", DienTich);
// alert("Diện Tích Là:" + DienTich);

//Chia lấy dư %

// const Sochia = prompt("Nhập Số Chia:");
// const Sobichia = prompt("Nhập Số Bị Chia:");
// const ketqua = Number(Sochia) % Number(Sobichia);
// alert("Kết Quả : " + ketqua);

// Toán Tử Gắn

// let a = 5;
// let b = 10;
// const tong = (b += a);
// const tong1 = (b -= a);
// const tong2 = (b *= a);
// const tong3 = (b /= a);
// const tong4 = (b %= a);
// console.log("Tong :", tong);
// alert("Kết Quả Cộng:" + tong );
// alert("Kết Quả Trừ:" + tong1);
// alert("Kết Quả Nhân:" +  tong2);
// alert("Kết Quả Chia:" +  tong3);
// alert("Kết Quả Chia lấy dư:" +  tong4);

//Toán Tử So Sánh
// const a = 5;
// const b = 5;
// alert( + a==b);

//Toán tử logic And Or

// const a = 5;
// const b = 20;
// const bieuthuc = a<b; //true
// const bieuthuc1 = a < 4;  //false

// console.log("and :"+ bieuthuc && bieuthuc1);
// console.log("or :"+ bieuthuc || bieuthuc1);
// console.log("not :"+ !(bieuthuc || bieuthuc1));
// console.log("not1 :"+ !(bieuthuc && bieuthuc1));

//Điều Kiện
// const diemtrungbinh = 6.5;

// if(diemtrungbinh >=9){
// console.log("Suất Xắc");
// }else if(diemtrungbinh >=8){
//   console.log("Giỏi");
// }else if(diemtrungbinh >=6.5){
//   console.log("Khá");
// }else if(diemtrungbinh >=6.5){
//   console.log("Khá");
// }else if(diemtrungbinh >=5.0){
//   console.log("Tb");
// }else{
//   console.log("yeu")
// }

// var a = prompt("Nhập Số");
// if(a % 2 ){
//   console.log("Lẻ");
// }else{
//   console.log("Chẵn");
// }

//Bài Bài Điều Kiện

// let User = prompt("Nhập Tài Khoản :");
// var PW = prompt("Nhập Pass Word :");
// if((User == "admin") && (PW == "123456")){
//   console.log("Login Thành Công");
// }else{
//   console.log("Login Thất Bại");
// }

//Bài tập điều kiện 2
// let a = prompt("Nhập A:");
// let b = prompt("Nhập B:");

// if(a > b){
//   console.log(" A > B" );
// }else if(a = b){
//   console.log(" A = B");
// }else if(a < b){
//   console.log(" A < B");
// }

//Kiểm tra chẵn lẻ
// const soKiemTra = prompt("Nhập Vào 1 số :");
// const isCheck = parseInt(soKiemTra) % 2;

// switch(isCheck){
//   case 0:
//     alert("số chẵn");
//     break;
//     case 1:
//     alert("số lẻ");
//     break;
//     default:
//       alert("Số không hợp lệ");
//     break;
// }

//Xanh , đỏ , tím vàng
// const MaMau = prompt("Nhập vào 1 mã màu");
// switch(MaMau){
//   case"blue":
//   alert("bạn chọn màu xanh");
//   break;
//   case"red":
//   alert("bạn chọn màu đỏ");
//   break;
//   case"black":
//   alert("bạn chọn màu đen");
//   break;
//   case"white":
//   alert("bạn chọn màu trắng");
//   break;
//   default:
//       alert("Mã màu không hợp lệ");
//     break;
// }

//Bai1
// Viết chương trình nhập từ bàn phím cạnh của một khối lập phương. Tính và xuất thể tích của khối chữ nhật s=a*a*a
// console.log("____________________Bài____1______________");
// const NhapA = prompt("(Bài 1) Nhập a :");
// console.log("Bai1 :", NhapA);
// const tong = Number(NhapA) * Number(NhapA) * Number(NhapA);
// console.log("KetQua", tong);
// console.log("____________________Bài____2______________");
// alert("Kết Quả Là:" + tong);

// bài 2
//Viết chương trình cho phép giải phương trình bậc nhất trong đó các hệ số a và b nhập từ bàn phím ax +b =0
// const Bai2A = prompt("(Bài 2) Nhập a");
// const Bai2B = prompt("(Bài 2) Nhập b");
// console.log("Nhiệm A Bài2 :", Bai2A);
// console.log("Nghiệm B Bài 2 :", Bai2B);
// if (Bai2A == 0) {
//   if (Bai2B == 0) {
//     console.log("Phương Trình này có vô số nghiệm");
//   } else {
//     console.log("Phương Trình này vô nghiệm");
//   }
// } else {
//   const tongb2 = -Number(Bai2A) / Number(Bai2B);
//   console.log("Phương trình có nghiệm X (Bai2):" + tongb2);
// }
// console.log("____________________Bài____3______________");

// bài 3
// nhập vào 3 số a, b, c tìm giá trị lớn nhất

// const Bai3A = prompt("(Bài 3) Nhập A : ");
// const Bai3B = prompt("(Bài 3) Nhập B : ");
// const Bai3C = prompt("(Bài 3) Nhập C : ");
// console.log("Số A Bai3 :", Bai3A);
// console.log("Số B Bai3 :", Bai3B);
// console.log("Số C Bai3 :", Bai3C);

// const maxValue = Bai3A;
// if (Bai3B > maxValue) {
//   console.log("Max :" + Bai3B);
// }
// if (Bai3C > maxValue) {
//   console.log("Max :" + Bai3C);
// } else {
//   console.log("Max :" + Bai3A);
// }
// console.log("____________________Bài____4______________");

// //Bài 4

// const Bai4A = prompt("(Bài 4) Nhập A : ");
// const Bai4B = prompt("(Bài 4) Nhập B : ");
// const Bai4C = prompt("(Bài 4) Nhập C : ");
// console.log("Số A Bai4 :" , Bai4A);
// console.log("Số B Bai4 :" , Bai4B);
// console.log("Số C Bai4 :" , Bai4C);

// const delta = ((Number(Bai4B) * Number(Bai4B)) - (4 * Number(Bai4A) * (Number(Bai4C))));   // b*b - 4*a*c;
// const x1;
// const x2;
// if(delta > 0){
//   x1 = ((-Number(Bai4B) + Math.sqrt(delta)) / (2 * Number(Bai4A)));
//   x2 = ((-Number(Bai4B) - Math.sqrt(delta)) / (2 * Number(Bai4A)));
//   console.log("Phương trình có 2 nghiệm : " + "x1" + x1 + "x2" + x2);
// } else if(delta == 0){
//   x1 = (-Number(Bai4B) / (2 * Number(Bai4A)));
//   console.log("Phương trình có nghiệm Kép: " + "x1" + x1 + "x2" + x2);
// }
