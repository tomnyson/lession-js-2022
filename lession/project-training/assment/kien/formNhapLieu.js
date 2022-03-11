//Nhập  3 điểm , tính trung bình , xếp loại
function DangDieuKien() {
    event.preventDefault();
    const sothu1_ddk = document.getElementById("txtsothu1_ddk").value;
    const sothu2_ddk = document.getElementById("txtsothu2_ddk").value;
    const sothu3_ddk = document.getElementById("txtsothu3_ddk").value;
    var paragraph = document.getElementById("result");
    const sum = Number(+sothu1_ddk + +sothu2_ddk + +sothu3_ddk) / 3;
    paragraph.textContent = "";
    paragraph.textContent += "điểm trung bình 3 môn là : " + sum;
    paragraph.style.color = "green";
    if(sum < 5){
        paragraph.textContent += "---- Học Sinh Yếu ";  
    }else if(sum <= 6){
        paragraph.textContent += "---- Học Sinh Trung Bình "; 
    }else if(sum <= 7){
        paragraph.textContent += "---- Học Sinh Khá "; 
    }else if( sum <= 9){
        paragraph.textContent += "---- Học Sinh Giỏi "; 
    }else if(sum <= 10){
        paragraph.textContent += "---- Học Sinh Xuất Sắc "; 
    }else{
        paragraph.textContent += "----Học Sinh k vượt quá 10đ  "; 
    }
    console.log("paragraph", paragraph);
    var p = document.createElement("p");
    var y = document.createTextNode("");
    p.appendChild(y);
    document.body.appendChild(p);
  }

   //Tìm số nguyên dương n nhỏ nhất sao cho 1 + 2 + … + n > 10000
  function Vonglap1a() {
    event.preventDefault();
    var paragraph = document.getElementById("result1a");
    paragraph.style.color = "green";
   
      S = 0;
      n = 0;
      while(S < 10000)
      {
          n++;
          S = S+n
      } 
      paragraph.textContent = "";
      paragraph.textContent = " Số Nguyên Dương nhỏ nhất để tổng từ 1 đến 10000 là :" +n;

    console.log("paragraph", paragraph);
    var p = document.createElement("p");
    var y = document.createTextNode("");
    p.appendChild(y);
    document.body.appendChild(p);
  }

  // Tính ước chung lớn nhất 
  function Vonglap1b() {
    event.preventDefault();
    ucln = 1;
    const sothu1_UCLN = document.getElementById("txtsothu1_UCLN").value;
    const sothu2_UCLN = document.getElementById("txtsothu2_UCLN").value;
    
    var paragraph = document.getElementById("result1b");

    paragraph.textContent = "";
    paragraph.style.color = "green";
   if(sothu1_UCLN == 0 && sothu2_UCLN == 0){
    paragraph.textContent = "Hai số '0' không có ước chung lớn nhất";
   }else if ( sothu1_UCLN != 0 && sothu2_UCLN == 0){
    paragraph.textContent = "Ước chung lớn nhất của "+ sothu1_UCLN + " và "+ sothu2_UCLN + " là : "  + sothu1_UCLN;
   }else if ( sothu1_UCLN == 0 && sothu2_UCLN != 0){
    paragraph.textContent = "Ước chung lớn nhất của "+ sothu1_UCLN + " và "+ sothu2_UCLN + " là : "  + sothu2_UCLN;
   }else{
       if( sothu1_UCLN < sothu2_UCLN){
           min = sothu1_UCLN;
       }else{
           min = sothu2_UCLN;
       }
       for( i = 1; i <= min ; i++){
           if(sothu1_UCLN % i == 0 && sothu2_UCLN % i == 0){
               ucln = i;
           }
       }
       paragraph.textContent = "Ước chung lớn nhất của "+ sothu1_UCLN + " và "+ sothu2_UCLN + " là : "  + ucln;
   }
    console.log("paragraph", paragraph);
    var p = document.createElement("p");
    var y = document.createTextNode("");
    p.appendChild(y);
    document.body.appendChild(p);
  }

  //Tính tam giác
  function Vonglap1c() {
    event.preventDefault();
    const sothu1_TG = document.getElementById("txtsothu1_TG").value;
    const sothu2_TG = document.getElementById("txtsothu2_TG").value;
    const sothu3_TG = document.getElementById("txtsothu3_TG").value;
    var paragraph = document.getElementById("result1c");
    paragraph.textContent = "";   
    paragraph.style.color = "green";

    if( sothu1_TG + sothu2_TG <= sothu3_TG || sothu1_TG + sothu3_TG <= sothu2_TG || sothu2_TG + sothu3_TG <= sothu1_TG){
        paragraph.textContent = "Tam Giác Không Hợp lệ !"; 
    }else{
        if((sothu1_TG == sothu2_TG) && (sothu2_TG == sothu3_TG)){
            paragraph.textContent = " Tam Giác Đều";
        }else{
            if(sothu1_TG * sothu1_TG + sothu2_TG * sothu2_TG == sothu3_TG * sothu3_TG ||
                sothu1_TG * sothu3_TG + sothu3_TG * sothu3_TG == sothu2_TG * sothu2_TG ||
                sothu2_TG * sothu2_TG + sothu3_TG * sothu3_TG == sothu1_TG * sothu3_TG){
                    paragraph.textContent = " Tam Giác Vuông";
                }else if (sothu1_TG == sothu2_TG || sothu1_TG == sothu3_TG || sothu2_TG == sothu3_TG){
                    paragraph.textContent = " Tam Giác Cân";
                }else{
                    paragraph.textContent = " Tam Giác Thường";
                }
        }
    }
  
    console.log("paragraph", paragraph);
    var p = document.createElement("p");
    var y = document.createTextNode("");
    p.appendChild(y);
    document.body.appendChild(p);
  }

//Chuyển number -> text
function Vonglap1d() {
    event.preventDefault();
    const sothu1_number = document.getElementById("txtsothu1_number").value;
    var paragraph = document.getElementById("result1d");
    paragraph.textContent = "";
    paragraph.style.color = "green";
   
    switch(sothu1_number){
        case "0": 
            paragraph.textContent = " Số Không"; 
            break;
        case "1":
            paragraph.textContent = " Số Một"; 
             break;
        case "2": 
            paragraph.textContent = " Số Hai"; 
            break;
        case "3": 
            paragraph.textContent = " Số Ba"; 
            break;
        case "4": 
            paragraph.textContent = " Số Bốn"; 
            break;
        case "5": 
            paragraph.textContent = " Số Năm"; 
            break;
        case "6": 
            paragraph.textContent = " Số Sáu"; 
            break;
        case "7":
             paragraph.textContent = " Số Bảy"; 
             break;
        case "8": 
            paragraph.textContent = " Số Tám"; 
            break;
        case "9": 
            paragraph.textContent = " Số Chín"; 
            break;
        case "10": 
            paragraph.textContent = " Số Mười"; 
            break;
        default :
            paragraph.textContent = " Số đã nhập không hợp lệ !";
    }
    

    console.log("paragraph", paragraph);
    var p = document.createElement("p");
    var y = document.createTextNode("");
    p.appendChild(y);
    document.body.appendChild(p);
  }

