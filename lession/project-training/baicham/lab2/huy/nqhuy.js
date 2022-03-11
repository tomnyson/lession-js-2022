/*console.log("Tổng");
let sum = 0;
for(let index = 0; index<=100; index++){
    sum +=index;
}
console.log(sum);*/
/*console.log("Giá trị chẵn đầu tiên");
for(i = 0; i <=100; i++){
    if(i %2 ==0 && i != 0){
        break;
    }
}
console.log(i);*/
/*for (var i = 1; i <= 100; i++)
{
  if (i == 20) {
      continue;
  }
  document.write(i+"-");
}*/
  /*  let tong = 0;
    let index = 0;
 
    while (index <= 100)
    {
        if (index % 2 == 0){
            tong += index;
        }
        index++;
    }
 
    console.log("Tổng số chẵn từ 1 tới 100 là: " + tong + "<br/>");*/
   /* let i =0;
    let n = 1000;
    while( n>i){
        n--;
        console.log(n);
    }*/
    /*console.log("Gtri chan dau tin voi while");
    let i = 0;
    while(i<100){
        if(i % 2 ==0 && i != 0){
            break;
            
        }
        console.log(i);
    }*/
    /*let i = 0;
    do{
        var n = prompt("Nhap so n")
        if(!isNaN(n)){
            for(i = 0; i <= n; i++){
                console.log(i)
            }
        }

    }while(isNaN(n));*/
   /* function hamLE(){
        for( let i = 0; i <=100; i++){
            if(i % 2 !=0){
                console.log(i)
            }
        }
        
    }
    //hamLE();
    function soCHINGPHUONG(n){
        var n = prompt("Nhap so n:")
        for( let i = 0; i <= n; i++){
            if(Math.sqrt(i) % 1 == 0){
                console.log( i + " la so chinh phuong")
            }else{
                console.log(i + " khong la so chinh phuon")
            }
        }   
    }
   //soCHINGPHUONG();*/
   function hamChihet(){
       var sum = 0;
       for( var i = 0; i <= 100; i++){
           if( i % 3 ==0){
               sum = sum + i;
           }
       }
       console.log("Tong la:", + sum);
   }
   //hamChihet();
   function Incacso(){
    for (var i = 0; i <= 100; i++)
    {
      if (i == 5 || i ==10) {
          continue;
      }
      document.write(i+"-");
   }
}
//Incacso();
function Chiahetcho2(){
    var s = 0;
    for(var i = 0; i <= 100; i++){
        if (i % 2 == 0){
            s = s + i;
            if( i == 10){
                continue;
            }
        }
    }
    console.log( "Tong la:", +s);
}
//Chiahetcho2();
function kiem_tra_snt(n){
    var flag = true;
    var n = prompt ("Nhap so n:")
    if (n < 2){
        flag = false;
    }
    else{
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
            }
        }
    }
    if (flag == true){
        document.write(n + " la snt <br/>");
    }
    else{
        document.write(n + " khong la snt <br/>");
    }
}
//kiem_tra_snt();

