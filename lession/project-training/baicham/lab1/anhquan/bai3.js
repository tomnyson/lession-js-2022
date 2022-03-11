var a = prompt("Nhập số a");
var b = prompt("Nhập số b");
var c = prompt("Nhập số c");
var max=a;

if (max < b){
	max = b;
}
else if (max < c){
    max = c;
}
else {
    max = max;
}

document.write("số lớn nhất là "+max);