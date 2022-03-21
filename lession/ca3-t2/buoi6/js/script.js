function isKiemTraLoaiSo(x) {
  if(x%2==0) {
    return true
  }
  return false;
}
/** */
function isChinhPhuong(n) {
  for(let i=0; i<=n ; i++) {
    if( Math.pow(i,2) === n) {
      return true
    }
  }
  return false;
}
function inDaySo() {
  /**
   *  giá trị khởi tạo: let i=0
   *  điều kiện: i< 100
   *  bước nhảy +1 => i++
   */
  /**
   * in sổ lẻ 
   * in số chẵn
   * in số chia hết cho 3 & 5
   * tính tổng của dãy số
   * tính trung bình cộng của dãy số
   * in ra sô chính phương
   * in ra số nguyên tố
   * in ra số hoàn thiện
   * Tính tổng tất cả các “ước số” của số nguyên dương
   * tính tổng nguyên: S = 1 + 1/2 + 1/3 + 1/4 +… 1/n
   * 
   */
  let n = document.getElementById('txtSo').value;
  let ketquaHTML = document.getElementById('ketqua');
  let chia3va5HTML = document.getElementById('ketqua1');
  let kq3 = document.getElementById('ketqua2');
  let result = ''
  let result3va5 = 'chia 3 và 5: '
  let result3=''
  let tong=0;
  let dem=0
  if(!isNaN(n)) {
    for(let i=0; i< Number(n); i++ ) {
      // kiểm tra lẻ
      if(isKiemTraLoaiSo(i)===false) {
        result +=`<span>${i}`+`</span>, `; 
      }

      // in ra các số chia hết cho 3 và 5
      if(Number(i) % 3 === 0 && Number(i) % 5===0) {
        result3va5 +=`<span>${i}`+`</span>, `; 
      }
      tong=tong+i;
      dem++
    }
    tong=tong/dem;
    

    ketquaHTML.innerHTML = result;
    chia3va5HTML.innerHTML = result3va5;
    kq3.innerHTML = tong;
  } else {
    alert('Invalid')
  }
}
function inSoChinhPhuong(){
  let ketqua =document.getElementById('ketqua')
  let so = document.getElementById('txtSo').value;
  let hienthi='';
  if(!isNaN(so)){
    for(let i = 0; i<Number(so);i++ ){
      // if(Number.isInteger(Math.sqrt(i))){
      //   hienthi += "i = "+ i +"<br>"
      // }
      if(isChinhPhuong(i)) {
        console.log('go here')
        hienthi += "i = "+ i +"<br>"
      }
    }
  }
  ketqua.innerHTML = hienthi;
}
