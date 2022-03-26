let mang = [];


document.getElementById('btnTaoMang').addEventListener('click', function(e) {
  let n = document.getElementById('txtSo').value;
let ketquaHTML = document.getElementById('ketqua');
  mang = randomNgauNhien(Number(n)||10)
  ketquaHTML.innerHTML = mang.join(', ');
})

document.getElementById('btnThem').addEventListener('click', function(e) {
  let n = document.getElementById('txtSo').value;
let ketquaHTML = document.getElementById('ketqua');
// them cuoi
  // mang.push(Number(n));
  mang.unshift(Number(n))
  ketquaHTML.innerHTML = mang.join(', ');
})

document.getElementById('btnXoa').addEventListener('click', function(e) {
let ketquaHTML = document.getElementById('ketqua');
// xoa cuoi
  // mang.pop()
  mang.shift()
  ketquaHTML.innerHTML = mang.join(', ');
})

document.getElementById('btnGhepMang').addEventListener('click', function(e) {
  let ketquaHTML = document.getElementById('ketqua');
  let mangNgauNhien = randomNgauNhien(5)
  //c1: concat
  // let mangMoi = mang.concat(mangNgauNhien)
  //c2: spread method es6
  let mangMoi = [...mang, ...mangNgauNhien];
    // mang.pop()
    ketquaHTML.innerHTML = mangMoi.join(', ');
  })

  document.getElementById('btnCopy').addEventListener('click', function(e) {
    let ketquaHTML = document.getElementById('ketqua1');
    //c1: concat
    // let mangMoi = mang.concat();
    //c2:  spread
    // let mangMoi = [...mang]
    //c3: slice
    let mangMoi = mang.slice()
      // mang.pop()
      ketquaHTML.innerHTML = mangMoi.join(', ');
    })

    document.getElementById('btnXoaViTri').addEventListener('click', function(e) {
      let ketquaHTML = document.getElementById('ketqua');
      let n = document.getElementById('txtSo').value;
      if(n !=='' && (Number(n) >=0 && Number(n) <= mang.length)){
        mang.splice(n,1)
      } else {
        alert('vi tri ko hop le ')
      }
      // let mangMoi = mang.concat();
      //c2:  spread
      // let mangMoi = [...mang]
      //c3: slice
        // mang.pop()
        ketquaHTML.innerHTML = mang.join(', ');
      })

      
    
function randomNgauNhien(x) {
  let mang = [];
  for(let i=0;i < x;i++) {
    mang.push(Math.floor(Math.random()*x))
  }
  return mang
}