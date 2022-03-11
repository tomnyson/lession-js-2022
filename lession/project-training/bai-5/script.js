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

function sum(a, b = 5) {
  return a + b;
}

function isChan(n) {
  if (n % 2 == 0) {
    return true;
  }
  return false;
}

function printChan(n) {
  for (let i = 0; i <= n; i++) {
    if (isChan(i)) {
      console.log("i", i);
    }
  }
}
function isChinhPhuong(n) {
  if (n < 1) {
    return false;
  }
  return Math.sqrt(n) * Math.sqrt(n) == n ? true : false;
}
function hamXuatDuLieu() {
  const so = document.getElementById("txt_n").value;
  if (isNaN(so)) {
    alert("ko phải là số");
  } else {
    let kequa = "";
    for (let i = 0; i <= so; i++) {
      if (isChinhPhuong(i)) {
        kequa += "<span>" + i + "</span><br/>";
      }
    }
    document.getElementById("result").innerHTML = kequa;
  }
}
