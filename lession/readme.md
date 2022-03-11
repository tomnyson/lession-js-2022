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
xếp loại học lực của sinh viên yếu, trung bình, khá, giỏi, xuất sắ
