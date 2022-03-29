
const xeMotoTomnyson = {
  ten: 'vision',
  mau_sac: 'đỏ',
  nam_sx: 2015,
  thuong_hieu: 'honda',
  bien_so: '47u12345',
  de: function() {
    console.log('de may');
  },
  chay: function(km) {
    console.log('chay: ' + km);
  },
  dung: function() {
    console.log('dung');
  }
}
console.log('thuong hieu', xeMotoTomnyson.thuong_hieu);
console.log('thuong hieu', xeMotoTomnyson['thuong_hieu']);
console.log(xeMotoTomnyson.de());
console.log(xeMotoTomnyson.chay(60));
console.log(xeMotoTomnyson.dung());
// copy 1 object moi tu object cu
// 1 Object.assign
const xeMotoTomnyson1 = Object.assign({}, xeMotoTomnyson);
//c2: spread
const xeMotoTomnyson2 = { ...xeMotoTomnyson };
console.log('xeMotoTomnyson2', xeMotoTomnyson2);
// covert object to String
//SON.stringify
const xeMotoTomnysonString = JSON.stringify(xeMotoTomnyson);
console.log('xeMotoTomnysonString', xeMotoTomnysonString);
//convert String to Object
//parse
const xeMotoTomnysonStringToObj = JSON.parse(xeMotoTomnysonString);
console.log('xeMotoTomnysonStringToObj', xeMotoTomnysonStringToObj);