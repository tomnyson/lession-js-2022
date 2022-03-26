let mang = []
document.getElementById('btnTaoMang').addEventListener('click', function(e) {
  let n = document.getElementById('txtSo').value;
  let kequaHTML = document.getElementById('ketqua')
  mang.push(Number(n))
  console.log('mang', mang)
  mang = ngauNhien(Number(n)||10)
  kequaHTML.innerHTML = mang.join(", ")
})

document.getElementById('btnThem').addEventListener('click', function(e) {
  let n = document.getElementById('txtSo').value;
  let kequaHTML = document.getElementById('ketqua')
  // mang.push(Number(n))
  mang.unshift(Number(n))
  kequaHTML.innerHTML = mang.join(", ")
})

document.getElementById('btnXoa').addEventListener('click', function(e) {
  let n = document.getElementById('txtSo').value;
  let kequaHTML = document.getElementById('ketqua')
  // mang.pop()
  mang.shift()
  kequaHTML.innerHTML = mang.join(", ")
})

document.getElementById('btnGhepMang').addEventListener('click', function(e) {
  let kequaHTML = document.getElementById('ketqua')
  let mangNgauNhien = ngauNhien(5);
  //c1 dung concat
  // let mangMoi = mang.concat(mangNgauNhien)
  //c2: spread 
  let mangMoi = [...mang, ...mangNgauNhien]
  kequaHTML.innerHTML = mangMoi.join(", ")
})

document.getElementById('btnCopy').addEventListener('click', function(e) {
  let kequaHTML = document.getElementById('ketqua1')
  //c1 dung concat
  // let mangMoi = mang.concat()
  //c2: spread 
  // let mangMoi = [...mang]
  //c3: slice
    let mangMoi = mang.slice()
  kequaHTML.innerHTML = mangMoi.join(", ")
})

document.getElementById('btnXoaVitri').addEventListener('click', function(e) {
  let kequaHTML = document.getElementById('ketqua1')
  let n = document.getElementById('txtSo').value;
     mang.splice(Number(n),1)
    console.log('mangMoi',mang)
  kequaHTML.innerHTML = mang.join(", ")
})

document.getElementById('btnXoaX').addEventListener('click', function(e) {
  let kequaHTML = document.getElementById('ketqua1')
  let n = prompt('enter x')
  if(mang.includes(Number(n))) {
    // for(let i=0; i<mang.length; i++) {
    //   if(mang[i] === Number(n)) {
    //     delete mang[i]
    //   }
    // }
    for(let i=0; i < mang.length; i++) {
      if(mang[i] === Number(n)) {
        mang.splice(i,1)
      }
    }
    // let mangMoi = mang.filter(item => item !== Number(n))
    kequaHTML.innerHTML = mang.join(", ")
  }else {
    alert(`${n} không tồn tại trng mảng`)
  }
 
})

function ngauNhien(x) {
  let mang = []
  for(let i =0; i < x ; i++) {
    mang.push(Math.floor(Math.random()*x))
  }
  return mang
}