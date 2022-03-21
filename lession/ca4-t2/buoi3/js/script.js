
function tinhTong() {
  let so1 = document.getElementById("so1").value
  let so2 = document.getElementById("so2").value
  let soSanh1 = (so1 == so2) // giá trị
  let soSanh2 = (so1 === so2) // = = = giá trị && kiểu dữ liệu
  let soSanh3 = (so1 === Number(so2))
  // === == != !== > >= < <=
  // && || !
  let dkAnd = !((3>2) || (4>5))
  let ketqua = document.getElementById("ketqua")
  ketqua.innerHTML = "ketqua:" + dkAnd;
  // alert("tinhTong"+tong)
}