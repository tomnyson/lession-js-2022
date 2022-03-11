/**
 * tạo 2 biến so1, so2
 * tính tổng 2 số và in ra màn hình
 */
let so1 = 2
let so2 = 3;
// so1 = Number(prompt('số thứ 1'))
// so2 = Number(prompt('số thứ 2'))
// so1 =2. so2 =3 
so1 %= so2 // <=> so1 = so1*so2
document.write("<h1> số 1 ="+so1+"</h1>")
document.write("<h1> số 2 ="+so2+"</h1>")
let tong = so1 + so2
// + - * / %
document.write("<h1> Tổng ="+tong+"</h1>")
// document.write(so2)

function tinhTong(){
  let so1 = document.getElementById("so1").value
  let so2 = document.getElementById("so2").value
  let tong = Number(so1) + Number(so2)
  let ketqua = document.getElementById('ketqua')
  ketqua.innerHTML = "kết quả: " + tong

}
