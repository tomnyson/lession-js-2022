var ptb2 = new Object();
ptb2.a;
ptb2.b;
ptb2.c;
ptb2.delta;
ptb2.x1;
ptb2.x2;
ptb2.giai = function() {
    ptb2.a = document.getElementById("hesoa").value;
    ptb2.b = document.getElementById("hesob").value;
    ptb2.c = document.getElementById("hesoc").value;
    ptb2.delta = Number(ptb2.b) * 2 - 4 * Number(ptb2.a) * Number(ptb2.c);
    if (ptb2.delta < 0) {
        alert("delta = " + ptb2.delta);
        document.getElementById("nghiemkep").innerHTML = "phương trình vô nghiệm";

    } else if (ptb2.delta == 0) {
        alert("delta = " + ptb2.delta);
        x1 = -Number(ptb2.b) / (2 * Number(ptb2.a));
        document.getElementById("nghiemkep").innerHTML = "phương trình có nghiệm kép " + x1;
    } else {
        alert("delta = " + ptb2.delta);
        x1 = ((-Number(ptb2.b) + Math.sqrt(ptb2.delta)) / (2 * Number(ptb2.a)));
        x2 = ((-Number(ptb2.b) - Math.sqrt(ptb2.delta)) / (2 * Number(ptb2.a)));
        document.getElementById("nghiemkep").innerHTML = "phương trình có 2 nghiệm phân biệt <br>" + "x1 = " + x1 + "<br> x2 = " + x2;
    }
}