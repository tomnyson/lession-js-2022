function taoMang() {
  // c1
  // let mang = new Array('java1','php1','php2','php3','laravel');
  //c2
  let mang = ['java1','php1','php2','php3','laravel'];
  let n = document.getElementById('txtSo').value;
  if(!isNaN(n)) {
    let mangKhoiTao= [...Array(Number(n)).keys()]
  let ketquaHTMl = document.getElementById('ketqua');
  let result = ''
  let resultChan =''
  let resultLe =''
   let result3va5 =''
   let cp=''
   let sum=0;
   let hoanThien=''
  // 1 day danh sach cac phan tu trong mang
  // kích thước của mảng: length
  // for(let i=0; i< mang.length; i++) {
  //   result+=`<span>${mang[i]}<span> | `
  // }
  // foreach
  // mang.forEach(function(item, index) {
  //   console.log('index', index);
  //   console.log('item', item)
  // })
  for(let i=0; i<mangKhoiTao.length; i++) {
    if(isChan(mangKhoiTao[i])) {
      resultChan+= `<span>${mangKhoiTao[i]}</span>, `
    }
    if(!isChan(mangKhoiTao[i])) {
      resultLe+= `<span>${mangKhoiTao[i]}</span>, `
    }
    if(isChia3va5(mangKhoiTao[i])) {
      result3va5+= `<span>${mangKhoiTao[i]}</span>, `
    }
    if(isChinhPhuong(mangKhoiTao[i])) {
      cp+= `<span>${mangKhoiTao[i]}</span>, `
    }
    if(isHoanThien(mangKhoiTao[i])) {
      hoanThien+= `<span>${mangKhoiTao[i]}</span>, `
    }
    sum+=mangKhoiTao[i];
  }
  ketquaHTMl.innerHTML = `chan: ${resultChan} 
  <br> le: ${resultLe} <br> chia 3 va 5: ${result3va5}
  <br> tổng: ${sum} <br>
  tb công: ${sum/mangKhoiTao.length} <br>
  CP: ${cp} <br>
  HT: ${hoanThien}
  `
  } else {
    alert('error input')
  }
  
}


function isChan(n) {
  if(n % 2 === 0) {
    return true
  }
  return false
}
function isChia3va5(n) {
  if(n % 3 === 0 && n % 5 === 0) {
    return true
  }
  return false
}

function createArrayRandom(n,range=100) {
  let arr = [];
  for(let i=0;i < n;i++) {
    arr.push(Math.floor(Math.random() * range) + 0)
  }
  console.log('arr', arr)
  return arr
}

function isChinhPhuong(n) {
  return Math.sqrt(n)%1===0
    // for(let i=0; i<=n;i++) {
    //   if(i*i === n) {
    //     return true;
    //   }
    // }
    // return false;
}
function isHoanThien(n) {
  let sum =0;
  for(let i = 0; i < n; i++) {
    if(n%i==0) {
      sum+=i;
    }
  }
  if(sum==n) return true;
  return false;
}
createArrayRandom(100,100)

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
