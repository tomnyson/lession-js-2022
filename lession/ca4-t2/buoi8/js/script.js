
function exampleArray() {
  /**
   * tao 1 mang moi
   */
  let n = document.getElementById('txtSo').value
  let ketquaHTML = document.getElementById('ketqua')
  let mang3 = [...Array(Number(n)).keys()]
  let result=''
  let chan=""
  let Chinhphuong=""
  let chia3Va5 =""
  if(!isNaN(n)) {
    let mang = new Array('java1','php1','php2','php3','laravel');
    let mang2 = ['java1','php1','php2','php3','laravel']
    console.log('mang', mang)
    console.log('mang', mang2)
    // lay phan tu trong mang 1
    console.log('mang thu 1', mang[0])
    let sum=0;
    let dem=0
    // duy mang
    for(let i=0; i< mang3.length; i++) {
      if(isChinhphuong(mang3[i])){

           Chinhphuong+=`<span>${mang3[i]}<span>, `
        }

      if(isChan(mang3[i])) {
        chan+=`<span>${mang3[i]}<span>, `
      }

        if(isChia3va5(mang3[i])) {
          chia3Va5+=`<span>${mang3[i]}<span>, `
      }
      sum+=mang3[i]
      dem++
    }
    ketquaHTML.innerHTML = `day so: ${result} <br>
    gt chẵn: ${chan} <br>
    chia 3 va 5: ${chia3Va5} <br>
    tổng: ${sum} <br>
     TB cộng: ${sum/dem} <br>
     Chinhphuong: ${Chinhphuong}
    `
  } else {
    alert('error')
  }


}
function isChan(x) {
  if(x%2==0) return true
  return false
}

function isChia3va5(x) {
  if(x%3==0 && x%5==0) return true
  return false
}
function isChinhphuong(x){
  for(let i =0; i<x; i++){
    if(i*i==x){
      return true
    }
  }
  return false
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