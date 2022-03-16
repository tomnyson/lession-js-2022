
function tinhTong() {
  let soThu1 = document.getElementById('sothu1').value;
  let soThu2 = document.getElementById('sothu2').value;
  
  /**
   * if(logic) {
   *  // xử lý đúng
   * } else {
   *  xủ lý nếu sai
   * } => logic => (true, false)
   */
  let ketqua;
    if(Number(soThu1) > Number(soThu2)) {
      ketqua = `số thứ 1 : ${soThu1}, số thứ 2: ${soThu2}: ${soThu1} > ${soThu2}`
    } else {
      ketqua = `số thứ 1 : ${soThu1}, số thứ 2: ${soThu2}: ${soThu1} < ${soThu2}`
    }
  let elmKetqua = document.getElementById('ketqua')
  elmKetqua.innerHTML = ketqua
}

function xepLoaiSV() {
  let dtb = Number(document.getElementById('dtb').value);
  /** 
   * if -> else if -> else
   * nếu >=5 tb >=6.5 khá >= 8.0 giỏi >= 9.0 xuất sắc còn lại thì sẽ yếu
  */
 let ketqua;
  if(dtb >=9) {
    ketqua = "xuat sac"
  } else if (dtb >= 8.0) {
    ketqua = "gioi"
  } else if (dtb >= 6.5) {
    ketqua = "kha"
  } else if (dtb >= 5) {
    ketqua = "TB"
  } else {
    ketqua = "yeu"
  }

  let elmKetqua = document.getElementById('hocLuc')
  elmKetqua.innerHTML = ketqua
}

function xemNgay() {
  let thu = document.getElementById('thu').value;
  let error = document.getElementById('error');
  error.innerHTML = ''
  // isNaN là hàm kiểm tra có phải số hay ko
  if(isNaN(thu)) {
    // alert('ko phai so')
    error.innerHTML = "nhập vào 1 số"
  } else {
    // alert('so')
  }
}