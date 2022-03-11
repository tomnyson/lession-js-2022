/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include<math.h>
using namespace std;

bool KiemTraChinhPhuong(int n)
{
    return sqrt(float(n)) == (int)sqrt((float)n);
}

bool KiemTraNguyenTo(int n)
{
    if (n < 2)
    {
        return false;
    }
    else if (n > 2)
    {
        if (n % 2 == 0)  // nếu là số chẵn
        {
            return false;
        }
        for (int i = 3; i <= sqrt((float)n); i += 2)   // kiểm tra các số lẻ
        {
            if (n % i == 0)
            {
                return false;
            }
        }
    }
    return true;
}
int main()
{
    long sum =0;
    int dem=0;
    float tbc =0;
   for(int i=20;i<= 3500;i++) {
       if(KiemTraChinhPhuong(i)) {
          sum+=i;
          dem++;
       }
       
   }
   std::cout << dem << std::endl;
    return 0;
}
