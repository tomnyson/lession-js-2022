/******************************************************************************

Đề số 1:


Câu 1: Tính tổng
các số chia hết cho 10 nhưng không chia hết cho 3 từ 1 đến 50


Câu 2: Viết
chương trình tìm số nhỏ nhất
trong 3 số nguyên  a, b, c


Câu 3: Nhập mảng 5 phần tử
kiểu số nguyên, xuất mảng


Cậu 4: tính trung bình cộng mảng bài 3


Câu 4: Nhập một chuỗi tên của bạn,xuất ra màn
hình tên của bạn và đếm có bao nhiêu ký tự


 


 


 


Đề số 2            :


Câu 1: Tính trung
bình cộng các số không chia hết cho 2 và không chia hết cho 3 từ 1 đến 100


Câu 2: Viết
chương trình tìm số  lớn  nhất
trong 3 số nguyên a, b, c


Câu 3: Nhập mảng 5 phần tử
kiểu số nguyên, xuất mảng


Câu 4:  Nhập một chuỗi tên của bạn,xuất ra màn
hình tên của bạn và đếm có bao nhiêu ký tự


Cậu 5: Tính tích mảng bài 3
*******************************************************************************/

#include <iostream>
#include <math.h>
#include <string.h>
using namespace std;

void cau1(int n)
{
  int s = 0;
  for (int i = 1; i <= n; i++)
  {
    if (i % 3 != 0)
    {
      s += i;
    }
  }
  cout << "tổng mảng 1- 50 là: " << s << endl;
}
void cau2(int a, int b, int c)
{
  int min = a;
  if (min > b)
  {
    min = b;
  }
  if (min > c)
  {
    min = c;
  }
  cout << "giá trị nhỏ nhất của: " << a << "," << b << "," << c << "là: " << min << endl;
}

void cau3()
{
  // nhập kích thước mảng
  int MAX = 100;
  int a[MAX];
  int size;
  cout << "nhập kích thước mảng" << endl;
  cin >> size;
  for (int i = 0; i < size; i++)
  {
    cout << "nhập phần tử thứ: " << i << endl;
    cin >> a[i];
  }
  // xuất mảng
  int sum = 0;
  int dem = 0;
  for (int i = 0; i < size; i++)
  {
    cout << "nhập phần tử thứ: " << i << "giá trị: " << a[i] << endl;
    sum += a[i];
    dem++;
  }
  // tính trung bình cộng
  cout << "trung bình cộng là: " << sum / dem << endl;
}

void cau4()
{
  string name;
  cout << "nhâp tên: " << endl;
  getline(cin, name);
  int dem = 0;
  for (int ins = 0; ins < name.size(); ins++)
  {
    dem++;
  }
  cout << "số ký tự trên tên của bạn: " << dem << endl;
}
int main()
{
  // câu 1
  // cau1(50);
  // cau2(1, 2, 3);
  // cau3();
  cau4();
  return 0;
}