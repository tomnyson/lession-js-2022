/**
 * object conMeo
 */
const conMeo = {
  ten: 'mun',
  tuoi: 2, 
  gioiTinh: 'cai',
  mau: 'den',
  an: function() {
    console.log('bat chuot')
  },
  ngu: function() {
    console.log('ngu')
  },
  keu: function(keu) {
    return sum(1,1)
  }
}
console.log('ten', conMeo.ten)
console.log('tuoi', conMeo['tuoi'])
// console.log('tuoi', conMeo.keu('meo meo meo'))
function sum(a,b) { return a+b}
console.log('tuoi',sum(1,1))
// tao object moi

// const conMeo2 = Object.assign({}, conMeo)
const conMeo2 = {...conMeo}

console.log('conMeo2',conMeo2)
// chuyển đổi object to string

const objectToString = JSON.stringify(conMeo)
console.log('objectToString',objectToString)
// string to obj
const objectObjToString = JSON.parse(objectToString)
console.log('objectObjToString',objectObjToString)