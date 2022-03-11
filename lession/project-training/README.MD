// let a = 1,
// b = 1;

// alert(++a); // 2, prefix form returns the new value
// alert(b++); // 1, postfix form returns the old value

// alert(a); // 2, incremented once
// alert(b); // 2, incremented once
// let c = ++a; // ?
// let d = b++; // ?
// console.log(a); //2
// console.log(b); //2
// console.log(c); //2
// console.log(d); //1

// let a = 2;

// let x = 1 + (a \*= 2); //5

### bai 1

Viết chương trình nhập từ bàn phím cạnh của một khối lập phương. Tính và xuất thể tích của khối chữ nhật s=a*a*a

### bai 2

Viết chương trình nhập các hệ số của phương trình bậc 2. Tính delta và xuất căn delta ra màn hình.
 Delta = Math.pow(b, 2) – 4 _ a _ c
 Sử dụng Math.sqrt(delta) để tính căn delta

### bai 3

Viết chương trình cho phép giải phương trình bậc nhất trong đó các hệ số a và b nhập từ bàn phím

### bai 4

Viết chương trình cho phép giải phương trình bậc hai trong đó các hệ số a, b và c nhập từ bàn phím

Biện luận theo delta
 Delta < 0: vô nghiệm
 Delta = 0: nghiệm kép x = -b/(2*a)
 Delta > 0: 2 nghiệm phân biệt
o X1 = (-b+căn(delta))/(2*a) o X2 = (-b-căn(delta))/(2\*a)

### bai 5

Viết chương trình nhập vào số điện sử dụng của tháng và tính tiền điện theo phương pháp lũy tiến
 Nếu số điện sử dụng từ 0 đến 50 thì giá mỗi số điện là 1000
 Nếu số điện sử dụng trên 50 thì giá mỗi số điện vượt hạn mức là 1200
HƯỚNG DẪN
 Nếu số điện sử dụng < 50: tien = soDien*1000  Ngược lại: tien = 50*1000 + (soDien - 50)\*1200

### bai 6

nhập vào năm sinh tính tuổi hiện tại biết năm hiện tại
`new Date.getYear()` nếu đủ 18 tuổi thì xuất ra bạn đủ đk thi bằng lái còn ngược lại thì không

### bai 7

nhập vào 2 số tính tổng của 2 số xem tổng có lớn hơn 100 hay ko xuất ra màn hình thông báo

### bai 8

nhập vào 3 số a, b, c tìm giá trị lớn nhất

### bai 9

Nhập 2 số a và b. Tính tổng, hiệu, tính và thương của hai số đó.

### bai 10

Nhập tênsảnphẩm,sốlượngvàđơngiá.Tính tiền và thuế giá trị gia tăng phải trả, biết:
a. tiền=sốlượng\*đơngiá
b. thuế giá trị gia tăng = 10% tiền

### bai 11

Nhập điểm thi và hệ số 3 môn Toán, Lý, Hóa của một sinh viên. Tính điểm trung bình của sinh viên đó.

### bai 12

Nhập bán kính của đường tròn. Tính chu vi và diện tích của hình tròn đó

### bai 13

Nhập vào số xe (gồm 4 chữ số) của bạn. Cho biết số xe của bạn được mấy nút?

### bai 14

Hãy đếm số lượng chữ số của số nguyên dương n.

### bai 15

Hãy tính tổng các chữ số của số nguyên dương n.

### bai 16

Hãy tính tổng các chữ số chẵn của số nguyên dương n.

### bai 17

Hãy tìm chữ số đảo ngược của số nguyên dương n.

### bai 18

Tìm chữ số nhỏ nhất của số nguyên dương n.

### bai 19

Tìm chữ số lớn nhất của số nguyên dương n.

### bai 20

Nhập vào tháng của một năm. Cho biết tháng thuộc quí mấy trong năm

### bai 21

Viết chương trình nhập 3 cạnh của một tam giác. Hãy cho biết đó là tam giác gì?

### bai 22

Viết chương trình nhập vào 3 số thực. Hãy in 3 số thực ấy ra màn hình theo thứ tự tăng dần mà chỉ dùng tối đa hai biến phụ

### bai 23

Tìm ước số chung lớn nhất của hai số nguyên dương.

### bai 24

Viết chương trình kiểm tra một số có phải số nguyên tố hay không.

### bai 25

Để kiểm tra một số chia hết cho 3 hay không thì ta chỉ cần sử dụng toán tử chia lấy dư %.

### bai 26

Người dùng sẽ nhập vào một số thứ 1 -> 7, trong đó số 1 là chủ nhật, số 2 là thứ 2, ... số 7 là thứ 7. Và để giải bài này thì bạn phải sử dụng nhiều lệnh if else liên tiếp nhau.

### bai 27

kiem tra năm nhuận

### bai 28

kiểm tra một số có phải là số chính phương hay không.

### bai 30

nhập số có 3 chữ số và đọc chữ số đó bằng chữ.

### bai 30

nhập vào 3 số xem có tạo thành tam giác hay không. nếu có hãy tính diện tích

### bai 31

tính căn bậc hai của một số

---

// so chinh phuong sqrt(i)\*sqrt(i) = n
// so hoan thien chinh = tong cac uoc so

```
bool check(int n){
    int sum = 0;//khai bao biem sum
    for(int i=1;i<=n/2;i++){
        if(n%i==0)
            sum+=i;
    }
    if(sum==n) return true; // tra ve true
    return false;
}
```

số nguyên tố

```
 int count = 0;
    for(int i = 2; i <= sqrt(n); i++){
        if(n % i == 0){
            count++;
        }
    }
    if(count == 0){
        printf("\n%d la so nguyen to", n);
    }else{
        printf("\n%d khong phai so nguyen to", n);
    }
}
```

Bài 97: Viết chương trình nhập 3 cạnh của 1 tam giác, cho biết đó là tam giác gì

Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2
Bài 3: Tính S(n) = 1 + ½ + 1/3 + … + 1/n
Bài 4: Tính S(n) = ½ + ¼ + … + 1/2n
Bài 5: Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)
Bài 6: Tính S(n) = 1/1×2 + 1/2×3 +…+ 1/n x (n + 1)
Bài 7: Tính S(n) = ½ + 2/3 + ¾ + …. + n / n + 1
Bài 8: Tính S(n) = ½ + ¾ + 5/6 + … + 2n + 1/ 2n + 2
Bài 9: Tính T(n) = 1 x 2 x 3…x N
Bài 10: Tính T(x, n) = x^n
Bài 11: Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3….N
Bài 12: Tính S(n) = x + x^2 + x^3 + … + x^n
Bài 13: Tính S(n) = x^2 + x^4 + … + x^2n
Bài 14: Tính S(n) = x + x^3 + x^5 + … + x^2n + 1
Bài 15: Tính S(n) = 1 + 1/1 + 2 + 1/ 1 + 2 + 3 + ….. + 1/ 1 + 2 + 3 + …. + N
Bài 16: Tính S(n) = x + x^2/1 + 2 + x^3/1 + 2 + 3 + … + x^n/1 + 2 + 3 + …. + N
Bài 17: Tính S(n) = x + x^2/2! + x^3/3! + … + x^n/N!
Bài 18: Tính S(n) = 1 + x^2/2! + x^4/4! + … + x^2n/(2n)!
Bài 19: Tính S(n) = 1 + x + x^3/3! + x^5/5! + … + x^(2n+1)/(2n+1)!

Bài 30: Cho số nguyên dương n. Kiểm tra xem n có phải là số hoàn thiện hay không
Bài 31: Cho số nguyên dương n. Kiểm tra xem n có phải là số nguyên tố hay không
Bài 32: Cho số nguyên dương n. Kiểm tra xem n có phải là số chính phương hay không

Bài 62: Cho 2 số nguyên dương a và b. Hãy tìm ước chung lớn nhất của 2 số này.
Bài 63: Cho 2 số nguyên dương a và b. Hãy tìm bội chung nhỏ nhất của 2 số này
Bài 94: Viết chương trình in ra tất cả các số lẻ nhỏ hơn 100 trừ các số 5, 7, 93

bài 1: tính tổng các số chia hết cho 3 từ 0-100
bài 2: tính tổng các số chia hết cho 2 loại 10
bài 3: in ra màn hình các số tù 0-100 loại 5 10
bài 4: in ra các sô nguyên tố từ 0-100
bài 5: S = 1 x 2 x 3…x N

Tính trung bình cộng các số lẻ ở vị trí chẵn

## Object class

```
class ClassName {
  constructor() { ... }
}

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let myCar1 = new Car("Ford", 2014);

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
```

###

```
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
```

### get set

```
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar = new Car("Ford");

```

### static

```
  class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }

  let myCar = new Car("Ford");

  // You can call 'hello()' on the Car Class:
  document.getElementById("demo").innerHTML = Car.hello();

  // But NOT on a Car Object:
  // document.getElementById("demo").innerHTML = myCar.hello();
  // this will raise an error.
```
