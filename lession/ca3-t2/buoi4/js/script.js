
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

function inCachDoc() {
  let so = document.getElementById('txtSo').value;
  let message = document.getElementById('error')
  let ketqua;
  message.innerHTML=''
  if(!isNaN(so)) {
    switch(Number(so)) {
      case 0:
        ketqua = 'số không'
        break
      case 1:
        ketqua = 'số 1'
        break
      case 2:
        ketqua = 'số 2'
        break
      case 3:
          ketqua = 'số 3'
          break
      case 4:
          ketqua = 'số 4'
          break
      case 5:
            ketqua = 'số 5'
            break
      default: 
          ketqua="sai giá trị"
          break
    }
    let ketquaHTML =  document.getElementById('readSo')
    ketquaHTML.innerHTML = ketqua
  } else {
    message.innerHTML = "ko phai so"
  }
  
  // isNaN()
}