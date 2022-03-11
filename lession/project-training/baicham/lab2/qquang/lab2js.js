function bai1() {
    var tong=0;
    for( var i = 1; i<=100; i++){
            if(i%3==0){
              tong+=i;  
            }
        }
        console.log("Tổng các số chia hết cho 3: "+tong)
}
bai1();

function bai2() {
    var tong2=0;
    for( var i = 1; i<=100; i++){
        if(i%2 == 0 && i!=20){

            tong2+=i;
             
        }
        console.log("Tổng các số chia hết cho 2 bỏ qua 20: "+tong2);
    }
            
}
bai2();
function bai3() {
    var tong3=0;
    for( var i = 1; i<=100; i++){
        if(i!=5 && i!=10){

            tong3+=i;
             
        }
        
    }
    console.log("Tổng các số từ 0-100 bỏ qua 5 va  10: "+tong3);
            
}
bai3();

function bai4(){
    for( var n =0; n<=100; n++){
        var kT= true;
        if (n < 2){
            flag = false;
        }
        else{
            for (var i = 2; i < n-1; i++)
            {
                if (n % i == 0){
                    kT = false;
                    break;
                }
            }
        }
        if (kT == true){
            console.log(n + " là số nguyên tố ");
        }
        else{
            console.log(n + " không phải là số nguyên tố ");
        }
    }
    
}
bai4();
function bai5() {
    tich =1;
    for(var i =1; i<=100; i++){
        tich*=i;
             
    }
    console.log("tich = ",+tich);
    
}
bai5();