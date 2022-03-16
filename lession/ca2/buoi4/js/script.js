
function tinhTong() {
  let so1 = document.getElementById('so1').value;
  let so2 = document.getElementById('so2').value;
  /**
   *  if(dk) {
   *  xl đúng
   * } else {
   *  xl sai
   * } => true | false
   */
  let ketqua = '';
  if(Number(so1) >= Number(so2)) {
    // xl true
    ketqua = `${so1} >= ${so2}`
  } else {
    ketqua = `${so1} <= ${so2}`
  }
  let ketquaHTML = document.getElementById('ketqua')
  ketquaHTML.innerHTML = ketqua
}
/**
 *  khái báo 1 form 1 input (tuoi)
 *  >=18 bạn sắp có nóc nhà , ko
 *  nhập vào 1 số kiểm tra số chẵn hay số lẻ
 */
// nếu >=5 tb >=6.5 khá >= 8.0 giỏi >= 9.0 xuất sắc còn lại thì sẽ yếu
function xepLoaiSv() {
  let dtb = Number(document.getElementById('dtb').value);
  let xeploai;

  if(dtb >= 9) {
    xeploai = "xuat sac"
  } else if (dtb >= 8) {
    xeploai = "gioi"
  } else if(dtb>=6.5) {
    xeploai = "kha"
  }  else if(dtb>= 5) {
    xeploai = "TB"
  } else {
    xeploai = 'yeu'
  }
  let xeploaiHTML = document.getElementById('xeploai')
  xeploaiHTML.innerHTML = xeploai;
} 