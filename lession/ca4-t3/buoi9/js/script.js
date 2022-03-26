
let mang=[]
document.getElementById('btnTaoMang')
.addEventListener('click', function (event) {
  let ketquaHTML = document.getElementById('ketqua')
  let n = document.getElementById('txtSo').value
  mang = randomArr(Number(n))
  ketquaHTML.innerHTML = mang.join(', ')
  //body
})

document.getElementById('btnThem')
.addEventListener('click', function (event) {
  let ketquaHTML = document.getElementById('ketqua')
  let n = document.getElementById('txtSo').value
  // them
  // mang.push(Number(n))
  mang.unshift(Number(n))
  ketquaHTML.innerHTML = mang.join(', ')
  //body
})
document.getElementById('btnXoa')
.addEventListener('click', function (event) {
  let ketquaHTML = document.getElementById('ketqua')
  // xoa
  // mang.pop()
  mang.shift()
  ketquaHTML.innerHTML = mang.join(', ')
  //body
})


document.getElementById('btnGhepMang')
.addEventListener('click', function (event) {
  let ketquaHTML = document.getElementById('ketqua')
  let n = document.getElementById('txtSo').value
  // them
  // mang.push(Number(n))
  let mangCon = randomArr(5)
  //c1: concat
  // let mangMoi = mang.concat(mangCon)
  //c2: spread
  let  mangMoi = [...mang, ...mangCon]
  ketquaHTML.innerHTML = mangMoi.join(', ')
  //body
})
document.getElementById('btnXoa')
.addEventListener('click', function (event) {
  let ketquaHTML = document.getElementById('ketqua')
  // xoa
  // mang.pop()
  mang.shift()
  ketquaHTML.innerHTML = mang.join(', ')
  //body
})

document.getElementById('btnCopy')
.addEventListener('click', function (event) {
  let ketquaHTML = document.getElementById('ketqua1')
  //c1
  // let mangMoi = mang.concat()
  //c2 slice
  // let mangMoi = mang.slice()
  //c3 spread
  let mangMoi = [...mang]  
  // xoa
  // mang.pop()
  ketquaHTML.innerHTML = mangMoi.join(', ')
  //body
})

document.getElementById('btnXoaVt')
.addEventListener('click', function (event) {
  let ketquaHTML = document.getElementById('ketqua1')
  const vt = prompt('Nhap vt can xoa')
  if( !isNaN(vt) && (vt >= 0 && vt< mang.length)){
    mang.splice(Number(vt),1)
  ketquaHTML.innerHTML = mang.join(', ')
  } else {
    alert('vi tri khong hop le')
  }

  //body
})

document.getElementById('btnXoaX')
.addEventListener('click', function (event) {
  let ketquaHTML = document.getElementById('ketqua1')
  const x = prompt('Nhap x can xoa')
  const isExist = mang.includes(Number(x))
  if(isExist){
    let mangTam = []
    // console.log('mangTam',mangTam)
    // for(let i = 0; i < mangTam.length; i++) {
    //   //c1
    //   // if(mang[i] !== Number(x)){
    //   //   mangTam.push(mang[i])
    //   // }
    //   //c2
    //   if(mangTam[i] === Number(x)){
    //     console.log('x', i)
    //     mangTam.splice(i, 1)
    //   }
    // }
    // mang = [...mangTam]
    // ! == 
     mangTam = mang.filter(item => item !== Number(x));
    ketquaHTML.innerHTML = mangTam.join(', ')
  } else {
    alert('khong co x')
  }

  //body
})


function randomArr(n) {
  let mang = [];
  for (let i = 0; i < n; i++) {
    mang.push(Math.floor(Math.random() * n))
  }
  return mang
}