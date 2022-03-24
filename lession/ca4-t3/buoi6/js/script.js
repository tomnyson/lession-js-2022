
function isChan(x) {
  if(x%2 == 0) {
    return true
  } 
  return false
}
function isChinhPhuong(x){
  for(let i=0; i <= x ; i++) {
    // binh phuong cua 1 so == chinh no la cp
    if(i*i === x) {
      return true;
    }
  }
  return false;
}

function inDanhSach(){
  /**
   * 
   */
  let n = document.getElementById('txtSo').value
  let ketquaHTM = document.getElementById('ketqua')
  let result = ''
  let resultChan = ''

  if(!isNaN(n)) {
    let sum =0;
    let dem =0;
    for(let i=0; i< Number(n); i++) {
      result += `<span>${i}<span>, `
      if(isChan(i)) {
        resultChan += `<span>${i}<span>, `
      }
      // tb cong
      sum+=i // sum = sum + i
      dem++
    }
    ketquaHTM.innerHTML = `${result} <br> chẵn: ${resultChan}
     tổng: ${sum} tb công: ${sum/dem}`
  } else {
    alert('Error input')
  }

  
}

function exampleWhile() {
  let n = document.getElementById('txtSo').value
  let ketquaHTML = document.getElementById('ketqua')
  let result = ''
  let resultChan = ''
  let i=0;
  while(i< Number(n)) {
    if(isChan(i)) {
      result+=`<span>${i}</span>, `
    }
    i++
  }
  ketquaHTML.innerHTML = result
}

function exampleDoWhile() {
  let n = document.getElementById('txtSo').value
  let ketquaHTML = document.getElementById('ketqua')
  let result = ''
  let resultChan = ''
  let i=0;
  // do {
  //   n = prompt('enter n')
  // } while(isNaN(n))
  do{
    if(isChan(i)) {
      result+=`<span>${i}</span>, `
    }
    i++
  } while((i< Number(n)) )
  ketquaHTML.innerHTML = `chẵn ${result}`
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
   * Tính tổng tất cả các “ước số” của số nguyên dương
   * tính tổng nguyên: S = 1 + 1/2 + 1/3 + 1/4 +… 1/n
   * 
   */
