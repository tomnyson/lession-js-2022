// var chieudai =prompt("nhạp chiều dài");
// var chieurong =prompt("nhập chiều rộng");
// var chieucao =prompt("nhập chiều cao");

// var dientich =((Number(chieudai))+Number(chieurong))*chieucao / 2;
// console.log(dientich)
// alert("dientich"+dientich)

// let a = 5;
// let b =10;

// console.log('cộng'+(a+=b))
// console.log('trừ'+(a-=b))
// console.log('nhân'+(a*=b))
// console.log('chia'+(a/=b))

// === cùng dữ liệu
// const a=5;
// const b=6;

// const bieuthuc =a>b;
// const bieuthuc1 =b>a;

//  console.log('and',bieuthuc&&bieuthuc1);
//  console.log('and',bieuthuc||bieuthuc1);
//  console.log("not",!bieuthuc&&bieuthuc1);

// const a=4;
// if(a%2==0){
//     console.log('so chẵn')
// }else{
//     console.log('so lẻ')
// }


// var yourname =prompt('nhập tk')
// var pass =prompt('mat khau')

// if(yourname =="admin"&& pass =="123456"){
//     alert("dang nhập thành công");
// }else{
//     alert("dăng nhập thất bại ")
// }

// let a=prompt("nhạp a");
// let b=prompt("nhạp b");

// if(a>b){
//     console.log("a >b");
// }else if (a<b){
//     console.log("a <b");
// }else {
//     console.log("a=b");
// }


// var mau=prompt("nhạp màu");
// switch(mau) {
//     case "xanh":
//     console.log("chọn màu xanh")
//     break;
//     case "đỏ":
//     console.log("chọn màu đỏ")
//     break;
//     case "trắng":
//     console.log("chọn màu trắng")
//     break;
// }

// b1
// var canha =prompt("nhập cạnh a ")

// var Scn =Number(canha)*Number(canha)*Number(canha);
// console.log(Scn)
// alert("dien tich CN"+Scn)

// b2
// let a = prompt('Nhập a: ')
// let b = prompt('Nhập b: ')
// a = Number(a)
// b = Number(b)
// if(a == 0){
//     if(b == 0){
//         alert('PT có vô số nghiệm')
//     }else{
//         alert('PT vô nghiệm')
//     }
// }else{
//     alert('PT có nghiệm duy nhất: X = '+(-b/a))
// }
// // b3
// let sothunhat=prompt("nhap so thu nhat")
// let sothuhai=prompt("nhap so thu nhat")
// let sothuba=prompt("nhap so thu nhat")
// sothunhat=Number(sothunhat)
// sothuhai=Number(sothuhai)
// sothuba=Number(sothuba)

// let max=sothunhat
// if(max <sothuhai){
//     max=sothuhai
// }if(max<sothuba){
//     max=sothuba
// }
// alert("số lớn nhất"+max)

// Bai4

// let a = prompt('Nhập số thứ nhất');
// let s = prompt('Nhập số thứ hai');
// let d = prompt('Nhập số thứ ba');
    
// if (a == 0) {
//     if (s == 0) {
//         alert('Pt vô nghiêm!!');
//     } else {
        
//         alert("Pt có 1 nghiêm:" + (Number(-d) / Number (s)));
//     }
// }

//  delta = Number(s)*Number(s) - 4*Number(a)*Number(d);

//  if (delta > 0) {
//     x1 =  ((Number(-s) + Math.sqrt(delta)) / (2*Number(a) ));
//     x2 =  ((Number(-s) - Math.sqrt(delta)) / (2*Number(a) ));
//     alert("X1 và X2 lần lượt là",x1,x2);
// } else if (delta == 0) {
//     x1 = (Number(-s) / (2 *Number (a)));
//            alert("Nghiệm kép;"+x1)
// } else {
//     alert('Pt vô nghiêm!!');
// }
// for(var i=0;i<=100;i++){
//     if(i%5==0&&i%2!=0){
//         alert("i"+i)
//     }
// }

// b4
//     let tong=0;
// for(let i=0;i<=100;i++){
//     tong+=i}
// console.log(tong)

// bài5
// for(let i=1;i<=1000;i++){
//     console.log(i)
// }
// bài 6
// for(let i=1000;i>0;i--){
//     console.log(i)
// }

// for(let i = 1 ; i <= 10 ; i++){
//     console.log('Bảng cửu chương: '+i)
//     for(let j = 1 ; j <= 10 ; j++){
//         console.log(i+' x '+j+' = '+i*j)
//     }
// }

// do while0-n
// do{
// var n= prompt("nhập số")
// if(!isNaN(n)){
//     for(let i=0;i<=n;i++){
//         console.log(i)
//     }
// }
// }while(isNaN(n));

// function insole(){
//     for(let i=0;i<=100;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
//     }
// }insole();

// số chính phương
// function kTra(n){
//     if(n<2)
//     return false;
//     let i =Math.sqrt(n);
//     for(let i=2;i<=n;i++){
//         if(n%i==0){
//             return false
//         }
//     }
// }
// function soCP(n){
//     for(let i=0;i<=n;i++){
//         if(kTra(i)){
//             console.log('số chính phương'+i)
//         }
//     }
// }print(i);   //sai 
tongSoChiaHetChoBa()
tongCacSoChiaHetChoHai()
cacSoLoaiNamVaMuoi()
soNguyenTo()
tichDenN()
function tongSoChiaHetChoBa(){
    var tong= 0
    for(let i = 0 ; i <= 100 ; i++){
        if(i % 3 == 0){
            tong += i
        }
    }
    alert('Tổng các số chia hết cho 3 từ 0-100 là: '+tong)
}

function tongCacSoChiaHetChoHai(){
    var tong = 0
    for(let i = 0 ; i <= 100 ; i++){
        if(i % 2 == 0){
            if(i == 10){
                continue;
            }
            tong += i
        }
    }
    alert('tổng các số chia hết cho 2 loại từ 10 là: '+tong)
}

function cacSoLoaiNamVaMuoi(){
    var tong = 0
    for(let i = 0 ; i <= 100 ; i++){
        if(i % 2 == 0){
            if(i == 10 || i == 5){
                continue;
            }
            tong += i
        }
    }
    alert('các số tù 0-100 loại 5 10 là: '+tong)
}

function soNguyenTo(){
    var soNguyenTo = true
    for(var i = 3 ; i <= 100 ; i++){
        for(let j = 2 ; j < i ; j++){
            if(i % j == 0){
                soNguyenTo = false
                break
            }
            soNguyenTo = true
        }
        if(soNguyenTo){
            console.log(i)
        }
        
    }
}

function tichDenN(){
    let tich = 1
    var n = prompt('Nhập N: ')
    n = Number(n)

    for(let i = 1 ; i <= n ; i++){
        tich *= i
    }
    alert('1 x 2 x 3…x '+n+ ' = '+tich)
}
