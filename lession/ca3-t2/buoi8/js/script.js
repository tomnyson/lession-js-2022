
function isChan(x) {
  if(x%2===0) return true;
  return false
}
function isNguyenTo(x) {
  if(x<2) return false;
  //c1
  // for(let i=2; i<= Math.sqrt(x); i++) {
  //   if(x%i==0) return false;
  // }
  //c2
   for(let i=2; i<= x/2; i++) {
    if(x%i==0) return false;
  }
  //c3
  // for(let i=2; i<x; i++) {
  //   if(x%i==0) return false;
  // }
  return true
}
function exampleMang() {
  //c1
  let mang = new Array('java1', 'java2', 'java3', 'java4')
  let n = document.getElementById('txtSo').value;
  if(!isNaN(n)) {
    // tạo ra số phần từ từ 0->n
    let mang2 = [...Array(Number(n)).keys()]
    let ketquaHTMl = document.getElementById('ketqua')
    // lay 1 phan tu trong mang
    console.log(mang2)
    let result = ''
    let nguyenTo=''
    //xuat ra mang
    console.log('mang', mang)
    console.log('mang2', mang2[50])
    
    // duyet mang
    // lay kich thuoc cua mang .length
    let chan=''
    for(let i=0; i< mang2.length;i++) {
      if(isChan(mang2[i])) {
        
        chan+=`<span>${mang2[i]}</span>, `
      }
      if(isNguyenTo(mang2[i])) {
        nguyenTo+=`<span>${mang2[i]}</span>, `
      }
      // console.log('mang i', mang[i])
    }
    ketquaHTMl.innerHTML =`chẵn: ${chan} <br>
      nguyên tố: ${nguyenTo}
    `
  } else {
    alert('error')
  }
 
}

 /**
   * yêu cầu nhập vào một số nếu ko phải số yêu cầu nhập lại
   * chỉ xuất ra giá trị chẵn mảng
   * chỉ in lẻ mảng
   * in ra các số chia hết cho 3 và 5 mảng
   * tính tổng của mảng
   * tinh trung bình công mảng
   * in ra số chính phương mảng
   * in ra số nguyên tố mảng
   * * in ra số hoàn hảo mảng
   * nhập vào 2 số a và b in ra giá trị trong khoảng [a,b]
   * đếm số phần tử chẵn trong mảng
   * đếm số phần tử lẻ trong mảng hay không
   * sắp xếp tăng dần
   * sắp xếp giảm dần
   */