// chia lấy dư %

// const sochia = prompt("nhập só chia");
// const sobichia = prompt("nhập só bị chia");
// const ketqua = Number(sochia) % Number(sobichia);

// let a = 1;
// let f = a;
// let b = ++a; // tăng giá trị lên 1 khi thực hiện phép tính
// let c = a++; // tăng lên sau khi thực hiện phép tính
// console.log("b", b);
// console.log("c", c);
// console.log("a", a);

// toán tử ăn

// let a = 5;
// let b = 3;
// a /= b; // a= a * b
// console.log("tong", a);

// let a = 5;
// let b = 10;

// toán tử so sánh

const a = 5;
const b = 6;

//js === cùng giá trị và cùng kdl
// console.log("a > b", a > b); //false
// console.log("a >= b", a >= b); // false
// console.log("a < b", a < b); //true
// console.log("a <= b", a <= b); // true

// toán tử login AND(&&) OR(||) NOT(!)
// variable = (condition) ? value1: value2;
// const bieuthuc = a > b;
// const bieuthuc1 = a < 4;

// console.log("and", !(bieuthuc && bieuthuc1));
// console.log("or", !(bieuthuc || bieuthuc1));
// console.log("not", !(bieuthuc || bieuthuc1));

// điều kiện
//yeu/tb/kha/gioi/xuat sac

// kiem tra so chan hay so le

//

// bài tập login
// username: admin
// passs: 123456
// dung => login success / login failed

// a, b kiểm tra 2 số với nhaua

// switch case
// kiểm tra chăn lẻ
const soKiemtra = prompt("nhập vào một số");

const isCheck = parseInt(soKiemtra) % 2;

switch (isCheck) {
  case 0:
    alert("số chẵn");
    break;
  case 1:
    alert("số lẻ");
    break;
  default:
    alert("sô không hợp lên");
    break;
}

// xanh, do, tim , vang,
