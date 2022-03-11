// bai 1:
alert('Bai1: Tính thể tích khối lập phương');
let canh = prompt('Nhập chiều dài');
let theTich = Number(canh)*Number(canh)*Number(canh);
alert('diện tích hinh thang: '+theTich);
//bài 2

alert('Bai2: Viết Pt bậc nhất:');
let soa =prompt('Nhập a:');
let sob =prompt('Nhập b:');
let ptb1 = Number(-sob)/Number(soa);
alert('Kết quả: '+ptb1);

//bai 3
alert('Bai3: Tìm giá trị lớn nhất nhất:');
let so1 = prompt('Nhập số thứ nhất');
let so2 = prompt('Nhập số thứ hai');
let so3 = prompt('Nhập số thứ ba');
max = so1;
    if(max < so2) {
        max = so2;
    }
    if(max < so3) {
        max=so3; 
    }
    alert(" so lớn nhất:" +max);

// bai 4:
alert('Bai4: Giải pt bậc 2:');

let x = prompt('Nhập số thứ nhất');
let y = prompt('Nhập số thứ hai');
let z = prompt('Nhập số thứ ba');
    
if (x == 0) {
    if (y == 0) {
        alert('Pt vô nghiêm!!');
    } else {
        
        alert("Pt có 1 nghiêm:" + (Number(-z) / Number (y)));
    }
}

 delta = Number(y)*Number(y) - 4*Number(x)*Number(z);

 if (delta > 0) {
    x1 =  ((Number(-y) + Math.sqrt(delta)) / (2*Number(x) ));
    x2 =  ((Number(-y) - Math.sqrt(delta)) / (2*Number(x) ));
    alert("X1 và X2 lần lượt là",x1,x2);
} else if (delta == 0) {
    x1 = (Number(-y) / (2 *Number (x)));
           alert("Nghiệm kép;"+x1)
} else {
    alert('Pt vô nghiêm!!');
}

//bài5
alert('Bai5: Tính tiền và thuế:');
let tenSP = prompt('Nhập tên sản phẩm: ');
let soLuong = prompt('Nhập số lượng: ');
let donGia = prompt('Nhập giá tiền: ');
// tiền=sốlượng*đơngiá b. thuế giá trị gia tăng = 10% tiền
let tien = Number(soLuong)*Number(donGia);
let thueGiaTri= Number(tien)*0.1;
alert(': Tính tiền và thuế:'+tien );
alert('Bai5: Tính  thuế:'+thueGiaTri);