
const iphone11promax = {
    name: 'iphone 11 pro max',
    price: '20.000.000',
    color: 'black',
    size: '5.8 inch',
    ram: '4 GB',
    camera: '12 MP',
    khoidong: function() {
      console.log('khoidong')
    },
    goidien: function(ai) {
      console.log(`goi den=> ${ai}`)
    }
}
console.log(iphone11promax)
console.log('ten',iphone11promax.name)
console.log('ten',iphone11promax['name'])
console.log('khoidong',iphone11promax.khoidong())
console.log('khoidong',iphone11promax.goidien('nguoi yeu'))

// create copy object

const iphone11promax1 = Object.assign({},iphone11promax)
console.log('iphone11promax1',iphone11promax1)
const iphone11promax2 = {...iphone11promax}

console.log('iphone11promax2',iphone11promax2)
// convert object to array
// JSON.stringify
const objString = JSON.stringify(iphone11promax2)
console.log('iphone11promax2',objString)
// JSOn.parse
const objParse = JSON.parse(objString)
console.log('iphone11promax2',objParse)
