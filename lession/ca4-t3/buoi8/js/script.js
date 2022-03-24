
function isChan(x) {
  // return x%2==0;
  if(x%2==0) return true;
  return false;
  // if(x%2==0) {
  //   return true;
  // } else {
  // return false;
  // }
}
function exampleArray() {
  let mang = new Array('Java1','java2','java3','java4','java5')
  let mang2 = ['Java1','java2','java3','java4','java5'];
  let n = document.getElementById('txtSo').value
  if(!isNaN(n)) {
    let mang3 = [...Array(Number(n)).keys()]
  let ketquaHTML = document.getElementById('ketqua')
  let ketqua=""
  let ketquaChan=""
  console.log('mang3', mang3)
  console.log('mang thu 0', mang2[0])
  console.log('mang',mang)
  //duyet mang
  // lenth lay kt cua mang
  let sum=0;
  for(let i=0; i<mang3.length; i++) {
    if(!isChan(mang3[i])) {
      ketqua+= `<span>${mang3[i]}</span>, `
    }
    if(isChan(mang3[i])) {
      ketquaChan+= `<span>${mang3[i]}</span>, `
    }
    sum+=mang3[i]

  }
  ketquaHTML.innerHTML = `le: ${ketqua} <br>
  só chẵn: ${ketquaChan} <br>
  sum: ${sum}
  `;


  } else {
    alert('error')
  }
  
}


  /**
  *  in sổ lẻ 
   * in số chẵn
   * in số chia hết cho 3 || 5
   * tính tổng của dãy số
   * tính trung bình cộng của dãy số
   * in ra sô chính phương
   * in ra số nguyên tố
   * in ra số hoàn thiện
   * in ra số đối xứng
   * Tính tổng của số nguyên tố của mảng
   * tính tổng nguyên: S = 1 + 1/2 + 1/3 + 1/4 +… 1/n
   * 
   */
