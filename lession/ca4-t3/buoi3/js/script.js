
function tinhTong(){
  let so1 = document.getElementById("so1").value
  let so2 = document.getElementById("so2").value
  let soSanhBang = (so1 == so2)
  let soSanhBang1 = (so1 == Number(so2))
  let soSanhBangBang = (so1 === so2)
  let soSanhBangBang1 = (so1 === Number(so2))
  // == === != !== > < >= <=
  let logicFF = (2<0)&&(3<2)
  let logic1 = ((2<0)&&(3<2))
  let logic2 = ((3>1)||(3<2))
  let logic3 = !((3>1)||(3<2))
  let ketqua = document.getElementById('ketqua')
  ketqua.innerHTML = "(2<0)&&(3<2)"+ logic1 + "<br> ((3>1)||(3<2))" + logic2 + "<br> !((2<0)||(3<2))"
  + logic3

}
