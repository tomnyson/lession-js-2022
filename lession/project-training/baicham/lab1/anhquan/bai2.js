var a = prompt("Nhập số a");
var b = prompt("Nhập số b");

if (a == 0 && b == 0){
	alert('Phương trình vô số nghiệm');
}
else if (a != 0 && b == 0){
    alert('Phương trình có nghiệm x = 0');
}
else if (a == 0 && b != 0){
    alert("Phương trình vô nghiệm");
}
else {
    alert('Phương trình có nghiệm x = ' + (-b/a));
}
