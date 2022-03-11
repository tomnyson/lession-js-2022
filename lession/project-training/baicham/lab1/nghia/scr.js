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

    alert("Nhập ok để chọn bài bên dưới: \nbài 1 Viết chương trình nhập từ bàn phím cạnh của một khối lập phương. Tính và xuất thể tích của khối chữ nhật s=a*a*a \n bài 2  Viết chương trình cho phép giải phương trình bậc nhất trong đó các hệ số a và b nhập từ bàn phím ax +b =0 \nbài 3 nhập vào 3 số a, b, c tìm giá trị lớn nhất \n  bài 4 Viết chương trình cho phép giải phương trình bậc hai trong đó các hệ số a, b và c nhập từ bàn phím Biện luận theo delta Delta < 0: vô nghiệm Delta = 0: nghiệm kép x = -b/(2*a) Delta > 0: 2 nghiệm phân biệt X1 = (-b+căn(delta))/(2*a) X2 = (-b-căn(delta))/(2*a) \n bài 5 Nhập tên sản phẩm,số lượng và đơngiá. Tính tiền và thuế giá trị gia tăng phải trả, biết: a. tiền=sốlượng*đơngiá b. thuế giá trị gia tăng = 10% tiền")
const mau = prompt("moi nhap số bào")
 
switch (mau) {
    case 1:
        const canh = prompt('nhap cach khoi lap phuong')
        const khoi = canh*canh*canh
        alert('khoi lap phuong la: '+ khoi)
        break;
    case 2:
        const a = prompt('nhap a')
        const b = prompt('nhap b')
        if(a==0){
            if(b==0){
                alert('phuong trinh vo so nghiem')
            }else{
                alert('phuong tring vo nghiem')
            }
        }else{

            alert('phuong trinh co nghiem x= '+(-b/a))
        }
        break;
    case 3:
        const a = prompt('nhap a')
        const b = prompt('nhap b')
        const c = prompt('nhap c')
        const max=a
        if(max<b){
            max=b
        }else if(max<c){
            max=c
        }
        alert('so lon nhat: '+max)
        break;
    case 4:
        const a = prompt('nhap a')
        const b = prompt('nhap b')
        const c = prompt('nhap c')
        if(a==0){
            if(b==0){
                if(c==0){
                    alert('phuong trinh vo so nghiem')
                }else{
                    alert('phuong tring vo nghiem')
                }
            }else{

                alert('phuong trinh co nghiem x= '+(-b/a))
            }
        }else{
            const delta=b*b-4*a*c
            if(delta<0){
                alert('phuong trinh vo nghiem')
            }else if(delta=0){
                alert('phuong trinh co nghiem kep'+(-b/(2*a)))
            }else{
                alert('phuong trinh cos 2 nghiem x1 = '+(-b+Math.sqrt(delta)/(2*a)) +'x2 = '+(-b-Math.sqrt(delta)/(2*a)) )
            }
        }
        break;
    case 5:
        const ten = prompt('nhap ten sp')
        const sl = prompt('nhap so luong sp')
        const dongia = prompt('nhap don gia sp')
        const tien=sl*dongia
        const thue=0.1*tien
        alert('tien: '+tien)
        alert('thue gia tri gia tang: '+thue)
        break;
    
    default:
        alert("hen gặp lại")
        break;
}
