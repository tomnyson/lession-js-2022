
function tinhTong() {
  let tuoi = Number(document.getElementById("tuoi").value)
  let gioitinh = document.getElementById("gioitinh").value
  /**
   *  if(kd) {
   *  case 1: xl khi về true
   * } else {
   *  xử lý false
   * } => dk => mệnh đề logic => true || false
   */
  /**
   *  nếu nam => 20 tuổi tuổi kết hôn
   *  nữ: >=18
   */
  let ketqua;
  // if(so1 >= so2) {
  //   // case true
  //   ketqua = `số thứ 1: ${so1}, số thứ 2 ${so2} ${so1}>=${so2}`
  // } else {
  //   ketqua = `số thứ 1: ${so1}, số thứ 2 ${so2} ${so1}<=${so2}`
  //   //case false
  // }
    if(gioitinh === 'nam') {
      if(tuoi>=20) {
        ketqua = "Ok"
      } else {
        ketqua = "Ko"
      }
    } else {
      if(tuoi>=18) {
        ketqua = "Ok" 
    } else {
      ketqua = "Ko"
    } 
  }
  let ketquaHTML = document.getElementById("ketqua")
  ketquaHTML.innerHTML = "ketqua:" + ketqua;
  // alert("tinhTong"+tong)
}
// let a = 5;
// a = 6;
// console.log('a',a)
// const b = 5;
// b= 6;
// console.log('b', b)
// nhập vào tuổi từ form nếu tuổi >=18 tuổi, có thể kết hôn, chưa đủu tuổi
// nhập điểm môn javascript nếu dtb >= 5 đậu, xin chúc mừng bạn có voucher 50%

function xeploaiSV() {
  let dtb = Number(document.getElementById("dtb").value)

  if(dtb<5){
    ketqua = 'yếu';
  }
  else if(dtb<6.5){
    ketqua = 'tb'
  }
  else if(dtb<6.5){
    ketqua = 'kha'
  }
  else if(dtb<8){
    ketqua = 'gioi'
  }
  else if(dtb<9){
    ketqua = 'xuat xac'
  }

  let ketquax=document.getElementById("ketqua1");
  ketquax.innerHTML = ketqua;
}

function docMenhGiaTien() {
  let soTien = document.getElementById("txtSoTien").value
  let inTienHtml = document.getElementById("inTien")
  let ketqua
  // isNaN
  if(isNaN(soTien)) {
    // ko phai la so
    alert('no')
  } else {
    // la so 
    switch(Number(soTien)) {
      case 500:
        ketqua = "năm trăm đồng chẵn"
      break;
      case 1000:
        ketqua = "một nghìn  đồng chẵn"
        break;
      default:
        ketqua="không hợp lệ"
        break
    }
    inTienHtml.innerHTML = ketqua
  }
}