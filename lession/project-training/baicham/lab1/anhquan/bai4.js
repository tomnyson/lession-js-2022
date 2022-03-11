var a = prompt('a = ');
var b = prompt('b = ');
var c = prompt('c = ');

if (a==0) {
	if (b==0) {
		if (c==0) {
			alert("PT vô số nghiệm");
		} else alert("PT vô nghiệm");
	} else x = -c/b;alert('x ='+ x);
} else d= b*b -4*a*c;
if (d>0) {
	x1 = (-b + Math.sqrt(d)) / (2*a);
	x2 = (-b - Math.sqrt(d)) / (2*a);
	alert ('Nghiệm thứ nhất x1 = '+x1+'\n Nghiệm thứ hai x2 = '+x2);
} else if (d==0) {
	x = -b/2*a;
	alert ('PT có nghiệm kép x1 = x2 =' +x);
} else alert ("PT vô nghiệm")