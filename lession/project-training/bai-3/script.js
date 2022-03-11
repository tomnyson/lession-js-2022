function timSolonNhat() {
  event.preventDefault();
  const sothu1 = document.getElementById("txtsothu1").value;
  const sothu2 = document.getElementById("txtsothu2").value;
  const sothu3 = document.getElementById("txtsothu3").value;
  var paragraph = document.getElementById("result");
  const sum = Number(+sothu1 + +sothu2 + +sothu3);
  paragraph.textContent = "";
  paragraph.textContent += "tổng của 3 số là: " + sum;
  paragraph.style.color = "green";
  console.log("paragraph", paragraph);
  var p = document.createElement("p");
  var y = document.createTextNode("This just got added");
  p.appendChild(y);
  document.body.appendChild(p);
}
