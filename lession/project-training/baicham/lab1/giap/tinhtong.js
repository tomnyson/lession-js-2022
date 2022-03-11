// var chieudai =prompt("nhạp chiều dài");
// var chieurong =prompt("nhập chiều rộng");
// var chieucao =prompt("nhập chiều cao");

// var dientich =((Number(chieudai))+Number(chieurong))*chieucao / 2;
// console.log(dientich)
// alert("dientich"+dientich)

// let a = 5;
// let b =10;

// console.log('cộng'+(a+=b))
// console.log('trừ'+(a-=b))
// console.log('nhân'+(a*=b))
// console.log('chia'+(a/=b))

// === cùng dữ liệu
// const a=5;
// const b=6;

// const bieuthuc =a>b;
// const bieuthuc1 =b>a;

//  console.log('and',bieuthuc&&bieuthuc1);
//  console.log('and',bieuthuc||bieuthuc1);
//  console.log("not",!bieuthuc&&bieuthuc1);

// const a=4;
// if(a%2==0){
//     console.log('so chẵn')
// }else{
//     console.log('so lẻ')
// }

// var yourname =prompt('nhập tk')
// var pass =prompt('mat khau')

// if(yourname =="admin"&& pass =="123456"){
//     alert("dang nhập thành công");
// }else{
//     alert("dăng nhập thất bại ")
// }

// let a=prompt("nhạp a");
// let b=prompt("nhạp b");

// if(a>b){
//     console.log("a >b");
// }else if (a<b){
//     console.log("a <b");
// }else {
//     console.log("a=b");
// }

// var mau=prompt("nhạp màu");
// switch(mau) {
//     case "xanh":
//     console.log("chọn màu xanh")
//     break;
//     case "đỏ":
//     console.log("chọn màu đỏ")
//     break;
//     case "trắng":
//     console.log("chọn màu trắng")
//     break;
// }

// b1
var canha = prompt("nhập cạnh a ");

var Scn = Number(canha) * Number(canha) * Number(canha);
console.log(Scn);
alert("dien tich CN" + Scn);

// b2
let a = prompt("Nhập a: ");
let b = prompt("Nhập b: ");
a = Number(a);
b = Number(b);
if (a == 0) {
  if (b == 0) {
    alert("PT có vô số nghiệm");
  } else {
    alert("PT vô nghiệm");
  }
} else {
  alert("PT có nghiệm duy nhất: X = " + -b / a);
}
// // b3
let sothunhat = prompt("nhap so thu nhat");
let sothuhai = prompt("nhap so thu nhat");
let sothuba = prompt("nhap so thu nhat");
sothunhat = Number(sothunhat);
sothuhai = Number(sothuhai);
sothuba = Number(sothuba);

let max = sothunhat;
if (max < sothuhai) {
  max = sothuhai;
}
if (max < sothuba) {
  max = sothuba;
}
alert("số lớn nhất" + max);

// Bai4

let a = prompt("Nhập số thứ nhất");
let s = prompt("Nhập số thứ hai");
let d = prompt("Nhập số thứ ba");

if (a == 0) {
  if (s == 0) {
    alert("Pt vô nghiêm!!");
  } else {
    alert("Pt có 1 nghiêm:" + Number(-d) / Number(s));
  }
}

delta = Number(s) * Number(s) - 4 * Number(a) * Number(d);

if (delta > 0) {
  x1 = (Number(-s) + Math.sqrt(delta)) / (2 * Number(a));
  x2 = (Number(-s) - Math.sqrt(delta)) / (2 * Number(a));
  alert("X1 và X2 lần lượt là", x1, x2);
} else if (delta == 0) {
  x1 = Number(-s) / (2 * Number(a));
  alert("Nghiệm kép;" + x1);
} else {
  alert("Pt vô nghiêm!!");
}
