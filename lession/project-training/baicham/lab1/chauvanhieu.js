function bai1() {
    var canhLapPhuong = prompt("nhập cạnh : ")
    console.log("diện tích lập phương = ", Math.pow(canhLapPhuong, 3))
}

function bai2() {
    var a = prompt("nhập a = ")
    var b = prompt("nhập b = ")
    if (a == 0 && b == 0) {
        console.log('Phương trình vô số nghiệm');
    } else if (a != 0 && b == 0) {
        console.log('Phương trình có nghiệm x = 0');
    } else if (a == 0 && b != 0) {
        console.log("Phương trình vô nghiệm");
    } else {
        console.log('Phương trình có nghiệm x = ' + (-b / a));
    }
}

function bai3() {
    var a = prompt("nhập a:")
    var b = prompt("nhập b:")
    var c = prompt("nhập c:")

    if (b > a && b > c) {
        max = b
    } else if (c > a && c > b) {
        max = c
    } else if (a > b && a > c) {
        max = a
    }
    console.log("max = ", max)
}

function bai4() {
    var a = prompt("nhập số a : ")
    var b = prompt("nhập số b : ")
    var c = prompt("nhập số c : ")

    var delta = Math.pow(b, 2) - (4 * a * c)

    if (delta < 0) {
        document.write("Thông báo vô nghiệm")
    } else if (delta == 0) {
        document.write("Tính và thông báo nghiệm kép" + "<br>")
        document.write("X1 = X2 = " + (-b / (2 * a)))

    } else {
        document.write("Tính và thông báo 2 nghiệm phân biệt" + "<br>")
        document.write("X1 = " + (-b + Math.sqrt(delta)) / (2 * a) + "<br>")
        document.write("X2 = " + (-b - Math.sqrt(delta)) / (2 * a))
    }
}

function bai5() {
    var name = prompt("nhập tên: ")
    var soLuong = prompt("nhập số lượng: ")
    var donGia = prompt("nhập giá : ")

    var thanhTien = soLuong * donGia + (soLuong * donGia * 0.1)
    console.log("Sản phẩm " + name + " có giá " + thanhTien + " bao gồm thuế VAT")
}












// var username = "admin"
// var password = "hello123"

// var userInput = prompt("USERNAME : ")
// var passInput = prompt("PASSWORD : ")
// if (username == userInput && password == passInput) {
//     console.log("ĐĂNG NHẬP THÀNH CÔNG")
// } else {
//     console.log("ĐĂNG NHẬP KHÔNG THÀNH CÔNG")
// }



// var a = prompt("nhập số a:  ")
// if (a % 2 == 0) {
//     console.log("chẵn")
// } else {
//     console.log("lẻ")
// }





// var chieuDai = prompt("nhập chiều dài: ");
// var chieuRong = prompt("nhập chiều rộng: ");
// var chieuCao = prompt("nhập chiều cao: ");


// var dienTich = ((Number(chieuDai) + Number(chieuRong)) * Number(chieuCao)) / 2
// var dienTich2 = ((Number(chieuDai) + Number(chieuRong)) / 2) * Number(chieuCao)

// console.log("diện tích = " + dienTich)
// console.log("diện tích = " + dienTich2)


// alert("chu vi = " + chuVi)
// console.log("diện tích = " + dienTich)
// console.log("chu vi = " + chuVi)

// function bcc() {
//     for (var i = 1; i < 10; i++) {
//         console.log("Bảng cửu chương " + i)
//         for (var j = 2; j < 10; j++) {
//             console.log(i + " x " + j + " = " + i * j)
//         }
//         console.log("______________")
//     }
// }

// function helloworld() {
//     console.log("hello world")
// }