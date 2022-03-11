
function tinhTong() {
  let soThu1 = document.getElementById('sothu1').value;
  let soThu2 = document.getElementById('sothu2').value;
    let soSanh = soThu1 == soThu2
    let soSanh1 = soThu1 === soThu2
  // let ketqua = Number(soThu1) + Number(soThu2);
  // == === != !== > >= < <= < <=
  let elmKetqua = document.getElementById('ketqua')
  elmKetqua.innerHTML = "== " + soSanh + " <br> ===" + soSanh1
  // console.log('tinh tong',ketqua)
}

let sosanh = !((1<0) && (2>5))
console.log('sosanh',sosanh)