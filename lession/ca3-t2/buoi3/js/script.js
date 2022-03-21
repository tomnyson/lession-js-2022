
function tinhTong() {
  let so1 = document.getElementById('so1').value;
  let so2 = document.getElementById('so2').value;

  let soSanhBang = so1 == so2
  let soSanhBangBang = (so1 === Number(so2))
  // == === !=(! =) !==(= = = > >= < <=)
  let soSanhAnd = (3>4)&&(5>6)
  let soSanhAndNot = !((4>2)||(5>6))
  let ketqua = document.getElementById('ketqua');
  ketqua.innerHTML = "kết quả =" + soSanhAndNot;
}

let a = 5;
a = 6;
console.log(a)