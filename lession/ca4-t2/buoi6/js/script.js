
function isCheckSoLe(x) {
  if(x%2 === 0) {
    return false
  } 
  return true
  // return x%2===0
}
function isChinhPhuong(x) {
  for(let i=0; i<=x; i++) {
    // i*i = x
    if(i*i === x) {
      return true
    }
  }
  return false
}

function ishoanthien(x){
  let sum = 0;
  for(let i=1;i<=x/2;i++){
    if(x%i==0){
      sum += i
    }
  }
  return(sum==x)
}
function isChia3va5(x) {
  if(x%3 === 0 && x%5 === 0) {
    return true
  } 
  return false
  // return x%2===0
}
function xuatDuLieu() {
  /**
   * ban đầu: i=0
   * điều kiện i>100
   * bước nhảy i tăng thêm 1
   */
  let n = document.getElementById('txtSo').value
  let ketquaHTML = document.getElementById('ketqua');
  let chia3Va5HTML = document.getElementById('ketqua1');
  let hoanthienHTML = document.getElementById('ketqua2')
  let cpHTML = document.getElementById('ketqua3')
  let result = ''
  let ketqua3va5 =''
  let ketquahoanthien = ''
  let cp =''
  for(let i=0; i < Number(n); i++) {
    // kiem tra so le

    if(isCheckSoLe(i)) {
      result +=`<span>${i}<span>, `
    }
    if(isChia3va5(i)) {
      ketqua3va5 +=`<span>${i}<span>, `
    }
    if(ishoanthien(i)) {
      ketquahoanthien +=`<span>${i}<span>, `
    }
    if(isChinhPhuong(i)) {
      cp +=`<span>${i}<span>, `
    }
  }
  ketquaHTML.innerHTML = result
  chia3Va5HTML.innerHTML = ketqua3va5
  hoanthienHTML.innerHTML = ketquahoanthien
  cpHTML.innerHTML = cp
}

/**
 *  in sổ lẻ 
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