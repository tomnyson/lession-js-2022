/**
 * b1: khái báo 2 biến : so1, so2
 * b2: thực hiện các phép tính + - * / %
 * in kết quả ra màn hình(console, alert, document.write)
 */
// let so1, so2;
// so1 = prompt('nhập số thứ 1')
// so2 = prompt('nhập số thứ 2')
// let tong = Number(so1) + Number(so2);
// let tru = Number(so1) - Number(so2);
// let nhan = Number(so1) * Number(so2);
// let chia = Number(so1) / Number(so2);
// document.write("<h1>tổng: "+tong+"</h1>")
// document.write("<h1>hiệu: "+tru+"</h1>")
// document.write("<h1>nhân: "+nhan+"</h1>")
// document.write("<h1>chia: "+chia+"</h1>")
/**toan tử gắn */
let x = 2;
let y = 3;
x %= y;
console.log('x', x)
console.log('y', y)
/**
 * hàm (function)
 * trả or ko trả
 */
function tinhTong() {
  let so1 = document.getElementById('so1').value;
  let so2 = document.getElementById('so2').value;
  let tong  = Number(so1) + Number(so2);
  let ketqua = document.getElementById('ketqua');
  ketqua.innerHTML = "kết quả: " + tong
//  alert('tinhTong'+so1)
}