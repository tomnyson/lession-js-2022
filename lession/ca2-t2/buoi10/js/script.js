/**
 * con nguoi
 * // gioi tinh, tuoi, can nang, scmnd
 */
let objConNguoi = {
  gioiTinh: 'nam',
  tuoi: 18,
  canNang: 55.5,
  scmnd: '12345679',
  hoc: function() {
    console.log('hoc bai')
  }
}
//
const nguoiCopy = Object.assign({},objConNguoi)
const nguoiCopy1 = {...objConNguoi}
console.log("objConNguoi",objConNguoi)
console.log("objConNguoi-Copy",nguoiCopy)
console.log("objConNguoi-Copy1",nguoiCopy1)
console.log("gioiTinh",objConNguoi['gioiTinh'])
console.log("objConNguoi",objConNguoi.hoc())
/*lưu lại*/
//JSON.stringify
const convertObjToString = JSON.stringify(objConNguoi)
console.log("convertObjToString",convertObjToString)
//JSON.parse
const convertStringToObj = JSON.parse(convertObjToString)
console.log("convertStringToObj",convertStringToObj)