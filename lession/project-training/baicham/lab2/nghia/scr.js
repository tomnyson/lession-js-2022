// let chieurong=prompt('nhap chieu rong')
// let chieudai=prompt('nhap chieu dai')
// let chieucao=prompt('chieu cao')
// let tong = ((Number(chieurong)+Number(chieudai))/2)* Number(chieucao)
// console.log(tong)
// alert("dien tich hinh thang: " + tong)
// let a = 6
// let b = 3
// c = a
// console.log('tong '+ (a += b))
// console.log('tru '+ (a -= b))
// console.log('nhan '+ (a *= b))
// console.log('chia '+ (a /= b))
// console.log('lay so du '+ (a %= b))
// console.log('phep gan '+ c)
// const bt1= a==b
// const bt2 = b<a
// const bt3 = c == a
// console.log('&&'+ (bt1 && bt2))
// console.log('||'+ (bt1 || bt2))
// console.log('&&'+ !(bt1 && bt3))

// const a=prompt('nhap so a')
// const b=prompt('nhap so b')

// if(a>b){
//     prompt('a>b')
// }else if(a<b){
//     prompt('a<b')
// }else{
//     let h = prompt('kieu so')
//     let k = prompt('kieu chu')

// alert(isNaN(h))
// alert(isNaN(k))

// var firstString = " Day la mot xau ky tu "
// var finalString = firstString.concat("Them mot xau ky tu nua ");
// alert(finalString);

// var firstString = " Day la mot xau ky tu "
// var finalString = firstString.toUpperCase();
// alert(finalString);

// var firstString = " Day la mot xau ky tu "
// var finalString = firstString.toLowerCase();
// alert(finalString);

// var x = String(100);
// alert(typeof(x));
// function ham(canh) {
//     alert('khoi lap phuong la: '+ khoi)
//    }

//     alert("Nhập ok để chọn bài bên dưới: \nbài 1 Viết chương trình nhập từ bàn phím cạnh của một khối lập phương. Tính và xuất thể tích của khối chữ nhật s=a*a*a \n bài 2  Viết chương trình cho phép giải phương trình bậc nhất trong đó các hệ số a và b nhập từ bàn phím ax +b =0 \nbài 3 nhập vào 3 số a, b, c tìm giá trị lớn nhất \n  bài 4 Viết chương trình cho phép giải phương trình bậc hai trong đó các hệ số a, b và c nhập từ bàn phím Biện luận theo delta Delta < 0: vô nghiệm Delta = 0: nghiệm kép x = -b/(2*a) Delta > 0: 2 nghiệm phân biệt X1 = (-b+căn(delta))/(2*a) X2 = (-b-căn(delta))/(2*a) \n bài 5 Nhập tên sản phẩm,số lượng và đơngiá. Tính tiền và thuế giá trị gia tăng phải trả, biết: a. tiền=sốlượng*đơngiá b. thuế giá trị gia tăng = 10% tiền")
// const mau = prompt("moi nhap số bào")
//  const chon=parseInt(mau)
// switch (chon) {
//     case 1:
//         const canh = prompt('nhap cach khoi lap phuong')
//         const khoi = canh*canh*canh
//         alert('khoi lap phuong la: '+ khoi)
//         break;
//     case 2:
//         const n = prompt('nhap a')
//         const m = prompt('nhap b')
//         if(n==0){
//             if(m==0){
//                 alert('phuong trinh vo so nghiem')
//             }else{
//                 alert('phuong tring vo nghiem')
//             }
//         }else{

//             alert('phuong trinh co nghiem x= '+(-m/n))
//         }
//         break;
//     case 3:
//         const a1 = prompt('nhap a')
//         const b2 = prompt('nhap b')
//         const c3 = prompt('nhap c')
//         const max=a1
//         if(max<b2){
//             max=b2
//         }else if(max<c3){
//             max=c3
//         }
//         alert('so lon nhat: '+max)
//         break;
//     case 4:
//         const a4 = prompt('nhap a')
//         const b4 = prompt('nhap b')
//         const c4 = prompt('nhap c')
//         if(a4==0){
//             if(b4==0){
//                 if(c4==0){
//                     alert('phuong trinh vo so nghiem')
//                 }else{
//                     alert('phuong tring vo nghiem')
//                 }
//             }else{

//                 alert('phuong trinh co nghiem x= '+(-b4/a4))
//             }
//         }else{
//             const delta=b4*b4-4*a4*c4
//             if(delta<0){
//                 alert('phuong trinh vo nghiem')
//             }else if(delta=0){
//                 alert('phuong trinh co nghiem kep'+(-b4/(2*a4)))
//             }else{
//                 alert('phuong trinh cos 2 nghiem x1 = '+(-b4+Math.sqrt(delta)/(2*a4)) +'x2 = '+(-b4-Math.sqrt(delta)/(2*a4)) )
//             }
//         }
//         break;
//     case 5:
//         const ten = prompt('nhap ten sp')
//         const sl = prompt('nhap so luong sp')
//         const dongia = prompt('nhap don gia sp')
//         const tien=sl*dongia
//         const thue=0.1*tien
//         alert('tien: '+tien)
//         alert('thue gia tri gia tang: '+thue)
//         break;
    
//     default:
//         alert("hen gặp lại")
//         break;
// }
// const nhap =prompt('nhap 1: kiem tra quy \n nhap 2: kiem tra thang')
// const n=parseInt(nhap)
// switch (n) {
//     case 1:{
//         const nha=prompt('nhap thang')
//         const quy=parseInt(nha)
//         if(quy==1||quy==2||quy==3){
//             alert('thang '+quy + ' thuoc quy 1')
//         }else if(quy==4||quy==5||quy==6){
//             alert('thang '+quy + ' thuoc quy 2')
//         }else if(quy==7||quy==8||quy==9){
//             alert('thang '+quy + ' thuoc quy 3')
//         }else if(quy==10||quy==11||quy==12){
//             alert('thang '+quy + ' thuoc quy 4')
//         }
//         break;
//     }
//     case 2:{

//         var ngay = new Date().getDay()

//         if(ngay==0){
//             alert('chu nhat')
//         }else if(ngay==1){
//             alert('thu 2')
//         }else if(ngay==2){
//             alert('thu 3')
//         }else if(ngay==3){
//             alert('thu 4')
//         }else if(ngay==4){
//             alert('thu 5')
//         }else if(ngay==5){
//             alert('thu 6')
//         }else if(ngay==6){
//             alert('thu 7')
//         }
//     }
//     default:
//         break;
// }

// var tong=0
// for (let index = 0; index < 10; index++) {
//     // if(index%2!=0 && index%5==0){
//         tong += index
//     // }
// }
// console.log('tong '+tong)

// for (let index = 1000; index > 0; index--) {
//         console.log(index)
// }

// for (let index = 0; index < 100; index++) {
//         console.log(index)
// }

//ban cuu chuong
// for (let index = 2; index <10; index++) {
//     console.log('ban cuu chuong '+index)
//     for (let inde = 1; inde <10 ; inde++) {
//         let tong = index*inde
//         console.log(index+'x'+inde+'='+tong)
//     }
// }

// for (let index = 1; index <=100; index++) {
//     if(index%2==0){
//         console.log('so chan dau tien '+index)
//         break
//     }
// }

// for (let index = 1; index <=100; index++) {
//     if(index==20){
//         // console.log('so chan dau tien '+index)
//         continue
//     }
//     console.log('so chan dau tien '+index)
// }

//so nguyen to
// let n=prompt('nhap so')
// for (let index = 2; index <n; index++) {
//     if(n%index!=0){
//         alert(n+' la so nguyen to')
//     }else{
//         alert(n+' khong la so nguyen to')
//     }
    
// }


// do {
//     var check = prompt('nhap so')
//     if(!isNaN(check)){
//         for (let index = 0; index <= check; index++) {
//             console.log('so '+index)
            
//         }
//     }

// } while (isNaN(check));

// việt hàm in ra các giá trị lẻ từ 0-100
// /////////////////////////
function soChan(n) {
    console.log('bài 1: tính tổng các số chia hết cho 3 từ 0-100')
    let tong=0
    for (let index = 0; index < n; index++) {
        if(index%3==0){
            tong+=index
        }
    }
    console.log(tong)
}
console.log(soChan(100))
// /////////////

function soChan2(n) {
    console.log('bài 2: tính tổng các số chia hết cho 2 loại 10 từ 0-100')
    let tong=0
    for (let index = 0; index < n; index++) {
        if(index%2==0&&index!=10){
            tong+=index
        }
    }
    console.log(tong)
}
console.log(soChan2(100))
// //////////////////
function soChan3(n) {
    console.log('bài 3: in ra màn hình các số tù 0-100 loại 5 10')
    for (let index = 0; index < n; index++) {
        if(index!=10&&index!=5){
            console.log(index)
        }
        
    }
}
console.log(soChan3(100))

// ////////////////////
function soChan4(n) {
    console.log('bài 4: in ra các sô nguyên tố từ 0-100')
    for (let index = 0; index < n; index++) {
            console.log(index)
    }
}
console.log(soChan4(100))
// /////////////
function soChan5(n) {
    console.log('bài 5: S = 1 x 2 x 3…x N')
    let tong=1
    for (let index = 1; index < n; index++) {
            tong*=index
    }
    console.log(tong)
}
console.log(soChan5(10))

// nhập vào 1 số tù 0-in ra số chính phương
