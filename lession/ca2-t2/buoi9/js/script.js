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
// createArrayRandom(100,100)

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
  var mangGlobal
  function taoMangRandom() {
    let n = document.getElementById('txtSo1').value;
    mangGlobal = createArrayRandom(Number(n) || 100,Number(n)||100)

    inMang(mangGlobal)
  }
  function inMang() {
    let ketquaHTMl = document.getElementById('ketqua1');
    let ketqua = ''
    for(let i=0; i<mangGlobal.length; i++) {
      ketqua+=`<span>${mangGlobal[i]}</span>, `
    }
    ketquaHTMl.innerHTML = ketqua 
  }
  // function bubbleSort(array) {
  //   var done = false;
  //   while (!done) {
  //     done = true;
  //     for (var i = 1; i < array.length; i += 1) {
  //       if (array[i - 1] > array[i]) {
  //         done = false;
  //         var tmp = array[i - 1];
  //         array[i - 1] = array[i];
  //         array[i] = tmp;
  //       }
  //     }
  //   }
  
  //   return array;
  // }
  // function bubbleSortGiam(array) {
  //   var done = false;
  //   while (!done) {
  //     done = true;
  //     for (var i = 1; i < array.length; i += 1) {
  //       if (array[i - 1] < array[i]) {
  //         done = false;
  //         var tmp = array[i - 1];
  //         array[i - 1] = array[i];
  //         array[i] = tmp;
  //       }
  //     }
  //   }
  
  //   return array;
  // }
  // document.getElementById('sortTang').addEventListener('click', function(event) {
  //   let arrTang = bubbleSort(mangGlobal)
  //   inMang(arrTang)
  // })
  // document.getElementById('sortGiam').addEventListener('click', function(event) {
  //   let arrTang = bubbleSortGiam(mangGlobal)
  //   inMang(arrTang)
  // })

  // document.getElementById('sortGiamFunc').addEventListener('click', function(event) {
  //   let arrTang = mangGlobal.sort((a, b) => (a > b ? -1 : 1))
  //   inMang(arrTang)
  // })
  // document.getElementById('sortTangFunc').addEventListener('click', function(event) {
  //   let arrTang = mangGlobal.sort()
  //   inMang(arrTang)
  // })

  let mang = []

  // them mot phan  vao mang
  document.getElementById('them')
  .addEventListener('click', function(event) {
    let n = document.getElementById('txtSo1').value;
    let ketquaHTMl = document.getElementById('ketqua1');
    // mang.push(Number(n))
    mang.unshift(Number(n))
    document.getElementById('txtSo1').value = ""
    ketquaHTMl.innerHTML = mang.toString()
    console.log('mang', mang)
  })

  document.getElementById('ngauNhien')
  .addEventListener('click', function(event) {
    let n = document.getElementById('txtSo1').value;
    let ketquaHTMl = document.getElementById('ketqua1');
    document.getElementById('txtSo1').value = ""
    mang =  createRandom(Number(n)||10)
    ketquaHTMl.innerHTML = mang.join(' ');
  })

  document.getElementById('xoa')
  .addEventListener('click', function(event) {
    // let n = document.getElementById('txtSo1').value;
    // mang.pop();
    mang.shift()
    let ketquaHTMl = document.getElementById('ketqua1');
    document.getElementById('txtSo1').value = ""
    console.log('mang',mang)
    ketquaHTMl.innerHTML = mang.join(' ');
  })

  document.getElementById('copy')
  .addEventListener('click', function(event) {
    //c1 toan tu ...
    // const mangMoi = [...mang]
    //c2: concat
    // const mangMoi = mang.concat();
    // c3: slice
    const mangMoi = mang.slice();
    let ketquaHTMl = document.getElementById('ketqua2');
    document.getElementById('txtSo1').value = ""
    console.log('mang',mang)
    ketquaHTMl.innerHTML = mangMoi.join(' ');
  })

  document.getElementById('xoaSo')
  .addEventListener('click', function(event) {
    //c1 toan tu ...
    // const mangMoi = [...mang]
    //c2: concat
    // const mangMoi = mang.concat();
    // c3: slice
    n = prompt('nhập vào số cần xoá')
    // const mangMoi = mang.slice();
    // let ketquaHTMl = document.getElementById('ketqua2');
    // document.getElementById('txtSo1').value = ""
    // console.log('mang',mang)
    // ketquaHTMl.innerHTML = mangMoi.join(' ');
  })

  function isCheckExist(x, mang) {
    for (let i = 0; i < mang.length; i++) {
      if(mang[i] === x) {
        return true
      }
    }
    return false
  }

  document.getElementById('sapXepTang').addEventListener('click', function(e) {
    // let temp;
    // for(let i=0; i < mang.length-1; i++) {
    //   for(let j=i+1; j<mang.length; j++ ) {
    //     if(mang[i] > mang[j]) {
    //       temp = mang[i]
    //       mang[i] = mang[j]
    //       mang[j] = temp
    //     }
    //   }
    // }
    mang.sort(function(a, b){return a-b});
    let ketquaHTMl = document.getElementById('ketqua2');
    ketquaHTMl.innerHTML = mang.join(' ');
  })
  function createRandom(n=10) {
    let mang=[];
    for(let i=0; i<n; i++) {
      mang.push(Math.floor(Math.random() * n) + 0)
    }
    return mang;
  }

  let mangA= [1,2,3]
  let mangB = [4,5,6]
  let mangC = mangB.slice()
  let mangChung = mangA.concat(mangB)
  console.log('mangC', mangC)
  mangC.splice(0,1)
  console.log('manf chung', mangChung)
  console.log('mangC', mangC)