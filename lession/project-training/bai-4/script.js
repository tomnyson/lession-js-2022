/**
 * step 1: gía trị khởi đầu
 * step 2: điều kiện dừng
 *  step 3: giá trị thay đổi sau mỗi vòng lặp
 */

// in ra số chẵn
// cách 1:
// for (let i = 0; i <= 100; i += 2) {
//   console.log("i", i);
// }

// cach 2

// break continue
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     continue;
//   }
// }

// in ra các số lẻ 0-100 và chia hết cho 5

// xuất ra các số chính phương

// in ra giá trị chẵn đầu tiên từ 0 -100 break
// in ra các giá trị không in 20 20 countinue

// while
// cần một điều kiện dừng true || false

// let i = prompt("nhap gia tri start");
// let n = prompt("nhap gia tri end");

// while (Number(i) < Number(n)) {
//   console.log("hello world", i);
//   i++;
// }

function hamXuatDuLieu() {
  event.preventDefault();
  let i = document.getElementById("txt_i").value;
  const n = document.getElementById("txt_n").value;
  const result = document.getElementById("result");
  result.innerHTML = "";
  while (Number(i) < Number(n)) {
    console.log(i);
    result.innerHTML += `<span>${i}</span></br/>`;
    i++;
  }
}

// do while 0 -n
// nhập một số bất ký >0
// nếu không phải số bắt nhập lại
// xuất ra giá trị chẵn từ 0 -> n

// do {
//   isNaN = true;
//   console.log("i", i);
//   i++;
// } while (i <= 100);
