function isChan(n) {
  if(n % 2 === 0) {
    return true
  }
  return false
}
function isChinhPhuong(n) {
  console.log('n',n)
  // mốt số vằng chăn bậc bậc 2 chủ
    // while(i <= n){
    //     if( Math.pow( i, 2) == n ) {   
    //         return true; /*Chỉ cần tìm thấy 1 số là đủ và thoát vòng lặp*/
    //     }
    //     i++;
    // }
    for(let i=0; i<=n;i++) {
      if(i*i === n) {
        return true;
      }
    }
    return false;
}

function inDanhSachSo() {
  /** 0 -> 100 */
  let n = document.getElementById('txtSo').value
  let ketquaHTML = document.getElementById('ketqua')
  let chinhPhuongHTML = document.getElementById('chinhPhuong')
  let result = '';
  let chinhPhuong = ''

  if(!isNaN(n)) {
    for(let i=0; i< Number(n); i++) {
      // kiểm tra ở đây chẵn
      if(isChan(i)) {
        result += `${i}, `
      }
      if(isChinhPhuong(i)) {
        console.log('i', i)
        chinhPhuong += `${i}, `
      }
      
    }
    ketquaHTML.innerHTML = result
    chinhPhuongHTML.innerHTML = chinhPhuong
  } else {
    alert('Error value')
  } 
 
  /**
   * yêu cầu nhập vào một số nếu ko phải số yêu cầu nhập lại
   * chỉ xuất ra giá trị chẵn
   * chỉ in lẻ
   * in ra các số chia hết cho 3 và 5
   * tính tổng của dãy số a, b
   * tinh trung bình công
   * in ra số chính phương
   * in ra số nguyên tốt
   * nhập vào 2 số a và b in ra giá trị trong khoảng [a,b]
   */

 
}


function tinhTong() {
  let so1 = document.getElementById('so1').value
  let so2 = document.getElementById('so2').value
  let ketquaHTML = document.getElementById('ketquaTong')
  let ketquaChan = ''
  // yêu cầu đầu vào là số
  if(!isNaN(so1) && !isNaN(so2)) {
    let sum =0;
    // số 1 < số 2
    if(Number(so1) < Number(so2)){
      while(Number(so1) <= Number(so2)) {
        sum = sum + Number(so1);
        // tính tổ
        // im chan
        if(isChan(so1)) {
          // sum +=i;
          ketquaChan += `<span>${so1}</span>, `;
        }
        so1++
      }
      // in kết quả
      ketquaHTML.innerHTML = `sum:${sum} </br> chăn: ${ketquaChan}`
    }else {
      alert(`lỗi: ${so1}>${so2}`)
    }
  } else {
    alert('lỗi nhập liệu')
  }
}

function calDoWhile() {
  let so1 = document.getElementById('txtSo1').value
  let ketquaHTML = document.getElementById('ketquaTong1')
  let sum=0;
  // do {
  //  so1 = prompt('ban nhap sai moi nhap lai')
   
  // } while(isNaN(so1))
  // while(Number(so1)<1000) {
  //   sum+=Number(so1)
  //   so1++;
  // }
  do {
    sum+=Number(so1)
    so1++
  } while(Number(so1)<1000)
  ketquaHTML.innerHTML = sum
}