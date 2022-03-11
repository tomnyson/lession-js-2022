
// so  nguyên tố
function check(n){
    if(n<2){
        return false;
    }
    let i = Math.sqrt(n);
    for(let i = 2;i <= i;i++){
        if(n % i == 0){
            return false;
        }
        return true;
    }
}

function printNguyento(n){
    for(let i = 0;i<=n;i++){
        if(check(i)){
            console.log("So Nguyen To :"+i);
            i++;
        }
    }
}

printNguyento(100);