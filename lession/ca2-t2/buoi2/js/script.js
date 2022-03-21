/**
 * 
 */
let soThu1 = 4
let soThu2 = 2;
// soThu1 = prompt('nhật vào số thứ 1');
// soThu2 = prompt('nhật vào số thứ 2');
soThu2 %= soThu1; // sothu2= soThu2*sothu1
// console.log('soThu1: ',soThu1)
console.log('ketqua: ',soThu2)
// let ketqua = Number(soThu1) + Number(soThu2);
// // alert(ketqua);
// // document.write("<h1>kêt quả = "+ketqua+"</h1>");
// console.log('tong',ketqua);
// console.log('tich',ketqua);
// console.log('thuong',ketqua);

function tinhTong() {
  let soThu1 = document.getElementById('sothu1').value;
  let soThu2 = document.getElementById('sothu2').value;
  let ketqua = Number(soThu1) + Number(soThu2);
  let elmKetqua = document.getElementById('ketqua')
  elmKetqua.innerHTML = "result: " + ketqua
  console.log('tinh tong',ketqua)
}