### operator
a = b + c - d;      // addition, substraction
a = b * (c / d);    // multiplication, division
x = 100 % 48;       // modulo. 100 / 48 remainder = 4
a++; b--;           // postfix increment and decrement
### Bitwise operators
&	AND 	 5 & 1 (0101 & 0001)	1 (1)
|	OR 	 5 | 1 (0101 | 0001)	5 (101)
~	NOT 	 ~ 5 (~0101)	10 (1010)
^	XOR 	 5 ^ 1 (0101 ^ 0001)	4 (100)
<<	left shift 	 5 << 1 (0101 << 1)	10 (1010)
>>	right shift 	 5 >> 1 (0101 >> 1)	2 (10)
>>>	zero fill right shift 	 5 >>> 1 (0101 >>> 1)	2 (10)
### Arithmetic
a * (b + c)         // grouping
person.age          // member
person[age]         // member
!(a == b)           // logical not
a != b              // not equal
typeof a            // type (number, object, function...)
x << 2  x >> 3      // minary shifting
a = b               // assignment
a == b              // equals
a != b              // unequal
a === b             // strict equal
a !== b             // strict unequal
a < b   a > b       // less and greater than
a <= b  a >= b      // less or equal, greater or eq
a += b              // a = a + b (works with - * %...)
a && b              // logical and
a || b              // logical or
### if else

##### bài 1:
Viết một chương trình js để nhập lương nhân viên, tính thuế thu nhập và lương ròng (số tiền lương thực sự mà nhân viên đó nhận được). Với các thông số giả sử như sau (không theo luật lương, chỉ là con số giả sử để dễ tính toán):

30% thuế thu nhập nếu lương là 15 triệu.
20% thuế thu nhập nếu lương từ 7 đến 15 triệu.
10% thuế thu nhập nếu lương dưới 7 triệu.

##### bài 2:

Viết chương trình js để nhập tuổi và in ra kết quả nếu tuổi học sinh đó
 không đủ điều kiện vào học lớp 10. Biết tuổi vào lớp 10 của học sinh là 16.

##### bài 3:

Viết chương trình js để nhập một số nguyên bất 
kỳ từ bàn phím và in kết quả ra màn hình để thông báo cho người dùng biết số đó lớn hay nhỏ hơn 100.
##### bài 4:
Viết chương trình js để người dùng nhập vào 3 số nguyên và tìm số lớn nhất trong 3 số đó

 #### bài 5:

 Viết chương trình js xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ

 Điểm trung bình >= 9.0 là hạng A.
Điểm trung bình >=7.0 và < 9.0 là hạng B
Điểm trung bình >=5.0 và < 7.0 là hạng C
Điểm trung bình <5.0 là hạng F

 #### bài 6:
Viết chương trình js để tìm nghiệm của phương trình bậc hai ax2 + bx + c = 0. Biết rằng:

Nếu a và b cùng bằng 0 thì phương trình vô nghiệm.
Nếu a=0 thì phương trình có một nghiệm là (-c/b).
Nếu b2-4ac < 0, thì phương trình vô nghiệm.
Nếu không, phương trình có hai nghiệm, dùng công thức tính nghiệm để tính.

#### bài 7:

Cửa hàng của bạn nhận gửi bán sản phẩm cho một công ty khác và hưởng hoa hồng, với mức hoa hồng theo doanh số bán như sau:

5% nếu tổng doanh số nhỏ hơn hoặc bằng 100 triệu.
10% nếu tổng doanh số nhỏ hơn hoặc bằng 300 triệu.
20 % nếu tổng doanh số là lớn hơn 300 triệu.
Hãy viết chương trình js để tính hoa hồng bạn sẽ nhận được dựa trên doanh số bán hàng.

#### bài 8:

Viết chương trình js để tính cước điện thoại bàn cho một hộ gia đình với các thông số như sau:

Phí thuê bao bắt buộc là 25 nghìn.
600 đồng cho mỗi phút gọi của 50 phút đầu tiên.
400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
200 đồng cho bất kỳ phút gọi nào sau 200 phút đầu tiên.

#### bài 9:

nhập điểm (toán + văn + anh) 
công thức điểm trung bình  (toán *2 + văn *2 + anh)/5.
xếp loại học lực của sinh viên yếu, trung bình, khá, giỏi, xuất sắc

## vòng lặp

```
function print_number()
{
    // Lấy number
    var number = document.getElementById("number").value;
 
    // Ép number sang kiểu INT
    number = parseInt(number);
 
    // Lặp để in kết quả
    var html = '';
    for (var i = 1; i <= number; i++){
        html += i + ' <br/>';
    }
    document.getElementById("result").innerHTML = html;
}
```
### kiểm tra nguyên tố
```
// hàm kiểm tra số nguyên tố
function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i <= Math.sqrt(n); i += 2)
        {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
 
    return flag;
}
 ```

 ### thay đổi màu của tag

 ```
 function change_backgroud()
{
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++){
        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0){
            divs[i].style.background = "red";
        }
        else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "blue";
        }
    }
}

```

6. Bạn hãy viết chương trình tính tổng của 50 số 50, 49, 48, ..., 1.
3. In ra các số từ 1 đến 100 mà chia hết cho 3.
5. Bạn hãy viết chương trình tính tổng của 50 số 1, 2, 3, ..., 50.
6. Bạn hãy viết chương trình tính tổng của 50 số 50, 49, 48, ..., 1.
7. Bạn hãy viết chương trình tình tổng của 50 số chẵn bắt đầu từ 2.
8. Bạn hãy viết chương trình tính tổng của 20 số 5, 10, 15, ..., 100.
<p>10. Bạn hãy nhập vào một số N bất kỳ và kiểm tra xem N có phải số nguyên tố hay không?&nbsp;<em>(Số nguyên tố là một số nguyên dương lớn hơn 1 và chỉ chia hết cho 1 và chính nó, ví dụ: 2, 3, 5, 7, 11, ...)</em></p>
10. Nhập số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
11. Viết chương trình kiểm tra số n có phải là số hoàn thiện không?

 if(!isChan(mang3[i])) {
      ketqua+= `<span>${mang3[i]}</span>, `
    }

### sap xep mang

```
let arr = [2,1,0,5]
console.log('arr', arr)
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                // Hoan vi 2 so a[i] va a[j]
                tg = arr[i];
                arr[i] = arr[j];
                arr[j] = tg;        
            }
        }
    }
   console.log(arr)
```

```
function bubbleSort(arr){
    
  var i, j;
  var len = arr.length;
    
  var isSwapped = false;
    
  for(i =0; i < len; i++){
      
    isSwapped = false;
      
    for(j = 0; j < len; j++){
        if(arr[j] > arr[j + 1]){
          var temp = arr[j]
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          isSwapped = true;
        }
    }
      
    // IF no two elements were swapped by inner loop, then break 
      
    if(!isSwapped){
      break;
    }
  }
    
  // Print the array
  console.log(arr)
}
  
  
var arr = [243, 45, 23, 356, 3, 5346, 35, 5];
  
// calling the bubbleSort Function
bubbleSort(arr)
```

### hôm nay tui hướng dẫn các bạn cách làm chức năng nang hiển thị detail cho sản phẩm nhé
có nhiều cách
nhưng tui sẽ xài cách dùng id để lấy detail
chúng ta sẽ pass id trên url
chúng ta thử validation hình ảnh nhé

```
function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

 function validate({id, name, description, image, price}) {
   let error = [];
  if(id === '' || isNaN(id)) {
    error.push('id is invalid')
  }
  if(name === '') {
    error.push('name is not empty')
  }
  if(price === '' || isNaN(price)) {
    error.push('price is invalid')
  }
  if(description === '') {
    error.push('description is invalid')
  }

  if(image === '' || !isValidURL(image)) {
    const extent = image.split('.').pop();  
    const allowImage = ['.jpg', '.jpeg', '.png'];
    if(!allowImage.includes(extent)) {
      error.push('image is not image link')
    }

  }
  return error;
 }
 ``

cách lấy detail

```
window.addEventListener('load', function(event) {
  // event
  // get id from url dùng để lấy id trừ url
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  const product  = store.getById(id);
  if(product) {
    document.getElementById('image').src = product.image
    document.getElementById('price').textContent = product.price
    document.getElementById('name').textContent = product.name
    document.getElementById('description').textContent = product.description
  }
})
```