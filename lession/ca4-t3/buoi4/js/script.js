
function tinhTong(){
  let so1 = document.getElementById("so1").value
  let so2 = document.getElementById("so2").value
  /**
   *  if(dk) {
   * xl dung
   * } else {
   * xl sai
   * }
   */
   let ketqua = document.getElementById('ketqua')
   let result;
   /** 
  if(Number(so1) > Number(so2)) {
    // xl dung;
    result = `so1: ${so1} , so2: ${so2}=> ${so1}>${so2}`
  } else {
    result = `so1: ${so1} , so2: ${so2} => ${so1}< ${so2}`
  }
  ketqua.innerHTML = result*/
  if((so1>=20 && so2=="Nam")||(so1>= 18 && so2 == "Nu")){
    result = `${so2} ${so1} da du tuoi ket hon`
  }else{
    result = `${so2} ${so1} chua du tuoi ket hon`
  }

ketqua.innerHTML = result
}
/**
 *  cho nhập tuổi vào nếu tuổi >=18 được thi bằng lái xe, chưa đủ tuổi
 *  nhập vào 1 số kiểm tra số đó chẵn hay lẻ
 *  nhập vào tuổi và giới tính, nếu nam >= 20
 *  đủ tuổi kết hôn, nữ >=18 đủ tuổi kết hôn
 */

function soSanh() {
  let so1 = Number(document.getElementById("soA").value)
  let so2 = Number(document.getElementById("soB").value)
  let result;
  let ketqua = document.getElementById('ketqua1')
  if(so1 === so2) {
    result = `so1 = ${so1}, so2 = ${so2}=> ${so1} === ${so2}`
  } else if (so1 > so2) {
    result = `so1 = ${so1}, so2 = ${so2}=> ${so1} > ${so2}`
  } else {
    result = `so1 = ${so1}, so2 = ${so2}=> ${so1} < ${so2}`
  }
  ketqua.innerHTML = result
}