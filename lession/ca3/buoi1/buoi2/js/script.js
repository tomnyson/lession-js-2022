/**
 * khái báo 2 biến số nguyên
 * nhập từ bàn phím 
 * tính + - * / %
 */
// let soThu1, soThu2;
// soThu1 = prompt('nhập số thứ 1')
// soThu2 = prompt('nhập số thứ 1')
// let tong = Number(soThu1) + Number(soThu2)
// // 1: 2, 1: 3
// soThu2 += soThu1; // sothu2 = sothu2 + sothu1
// // + - * / %
// document.write("<h1>"+tong+"</h1>")
// document.write("<h1>ST1: "+soThu1+"</h1>")
// document.write("<h1>ST2: "+soThu2+"</h1>")

function tinhTong() {
  let so1 = document.getElementById("so1").value
  let so2 = document.getElementById("so2").value
  let tong = Number(so1) + Number(so2)
  let ketqua = document.getElementById("ketqua")
  ketqua.innerHTML = "Kết quả: " + tong;
  // alert("tinhTong"+tong)
}