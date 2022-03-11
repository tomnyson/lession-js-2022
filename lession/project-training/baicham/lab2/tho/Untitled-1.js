// let sum = 0;
// for(let index = 0 ; index < 100 ; index ++){
//     sum = sum + index;
// }
// console.log(sum);

// console.log("____5____");

// in các số từ 1 -> 1000 theo thứ tự tăng dần
// for(let index = 1; index <= 1000; index++){
//     console.log(index);
// }

//In các số từ 1 -> 1000 giảm dần
// console.log("___6___");

// for(let index = 1000 ; index >= 1; index--){
//     console.log(index);
// }


// Bảng cửu chương
// for(let i = 1 ; i <= 10 ; i ++){
//     console.log("Bảng cửu chương số :" +i)
//     for(let j = 1; j <=10 ; j ++){
//         console.log(i+ "x" + j + " = " + i*j);
//     }
// }


//In các giá trị chẵn và bỏ số 20
// for( let index = 1 ; index <= 100; index ++){
//     if(index == 20){
//         continue
//     }
//     console.log("Số chẵn " + index);
// }

//in ra các số nguyên tố
// for(let i = 1 ; i <= 100 ; i ++){
//     if( i % 1 && i % i){
//         continue
//     }
//     console.log("Số nguyễn tố" + i);
// }


//while 
//Cần 1 điều kiện dừng
// let i = prompt("Nhập giá trị bắt đầu");
// let n = prompt("Nhập giá trị kết thúc");
// while(Number(i) < Number(n)){
//     console.log("Test", i);
//     i++;
// }




// Tổng số chẵn từ 1 -> 100 . while
// let i = 100;
// while( i >= 0){
//     console.log( +i)
//     i --;
// }

// Tổng số chẵn từ 100 -> 1 . while

// let i = 0;
// while(i <= 100){
//     console.log( +i)
//     i++;
// }

// var i = 0;
// while(i < 100){
//     if(i ==20){
//         continue;
//     }
//     console.log(i);
//     i++;
// }


//Do While 0 -> n

// do{
//     var i = prompt("Nhập giá trị : ");
//     if(!isNaN(i)){
//         for(let j = 0 ; j <= i; j++){
//             console.log(j);
//         }
//     }
// }while(isNaN(i));

// function sum(a, b){
//  return a + b;
// }

// console.log("tổng" , sum(2, 3));

// Bài tập in số lẻ function

// function inSL(){
//     for(let a = 0; a <= 100; a ++){
//         if( a % 2 != 0){
//             console.log(a);
//         }
//     }
// }

// inSL();



//Số chính phương
// var a = prompt("Nhập giá trị : ");

// function so_chinh_phuong(a)
// {
//     // for(let i = 0; i <= a ; i++){
//         if (Math.sqrt(a) % 1 == 0){
//             console.log(a + " là số chính phương");
//         }
//         else {
//             console.log(a + " không phải là số chính phương");
//         }
//     // }
// }
 
// so_chinh_phuong(a);



//Lab2 a
function Bai1a(){
var tong1 = 0;
console.log("________Bai_1__________");
for (let i = 0; i <= 100; i++){
    if (i % 3 == 0){      
        tong1 += i;
    }
    console.log(" Ket Qua la : "+ tong1);
  }
}

Bai1a();


// //bài 2b: tính tổng các số chia hết cho 2 loại  10
function bai1b(){
var tong2 = 0;
console.log("________Bai_2__________");
for (let a = 0; a <= 100; a++){
    if (a % 2 == 0 && a != 10){      
        tong2 += a;
    }
    console.log( "Ket Qua la :"+ tong2);
}
}

bai1b();

// //bài 3: in ra màn hình các số tù 0-100 loại 5 10

console.log("________Bai_3__________");
for (var b = 0; b <= 100; b++){
    if (b != 5 && b != 10){      
        console.log(b);
    }
}

// //Bài 4 : kiểm tra số nguyên tố
// console.log("________Bai_4__________");
// for(var c = 1 ; c <= 100 ; c ++){
//     if( c % 1 && c % c){
//         console.log(c);
//     }
// }