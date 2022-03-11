
function tinhTong() {
  let soThu1 = document.getElementById('sothu1').value;
  let soThu2 = document.getElementById('sothu2').value;
  let ketqua = Number(soThu1) + Number(soThu2);
  let elmKetqua = document.getElementById('ketqua')
  elmKetqua.innerHTML = "result: " + ketqua
  console.log('tinh tong',ketqua)
}