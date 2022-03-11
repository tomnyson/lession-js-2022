//Bài 1
let chonBai = prompt('Bài 1: \nBài 2: \nBài 3: \nBài 4: \nBài 5: \n')
chonBai = Number(chonBai)
switch(chonBai){
    case 1:{
        let canhLapPhuong = prompt('Nhập cạnh lập phương: ')
        let theTich = Math.pow(Number(canhLapPhuong), 3);
        alert('Thể tích là: '+ theTich)
        break;
    }
    case 2:{
        //Bài 2
        let a = prompt('Nhập a: ')
        let b = prompt('Nhập b: ')
        a = Number(a)
        b = Number(b)
        if(a == 0){
            if(b == 0){
                alert('PT có vô số nghiệm')
            }else{
                alert('PT vô nghiệm')
            }
        }else{
            alert('PT có nghiệm duy nhất: X = '+(-b/a))
        }
        break;
    }
    case 3:{
        //Bài 3
        let soThuNhat = prompt('Nhập số thứ nhất: ')
        let soThuHai = prompt('Nhập số thứ hai: ')
        let soThuBa = prompt("Nhập số thứ ba: ")
        soThuNhat = Number(soThuNhat)
        soThuHai = Number(soThuHai)
        soThuBa = Number(soThuBa)

        let max = soThuNhat
        if(max < soThuHai){
            max = soThuHai
        }
        if (max < soThuBa){
            max = soThuBa
        }
        alert('số lớn nhất là '+max)
        break;
    }
    case 4:{
            //Bài 4:
            let x = prompt('Nhập a: ')
            let y = prompt('Nhập b: ')
            let z = prompt('Nhập c: ')
            x = Number(x)
            y = Number(y)
            z = Number(z)

            let delta =  y*y - 4*x*z
            if(delta < 0){
                alert('PT vô nghiệm')
            }else if(delta == 0){
                alert('PT có nghiệm kép: X = ', -y / (2 * x))
            }else{
                let x1 = (-y + Math.sqrt(delta)) / (2*x)
                let x2 = (-y - Math.sqrt(delta)) / (2*x)
                alert('PT có 2 nghiệm phân biệt: \n X1 = '+x1+'\nX2')
            }

        break;
    }
    case 5:{
        //Bài 5
        let tenSanPham = prompt('Nhập tên sản phẩm')
        let soLuong = prompt('Nhập số lượng')
        let donGia = prompt('Nhập đơn giá: ')
        soLuong = Number(soLuong)
        donGia = Number(donGia)

        let tien = soLuong*donGia
        let thueGtgt = tien*0.1

        alert('Tiền = '+ tien + '\n Thuế = '+thueGtgt)
        break;
    }
}







