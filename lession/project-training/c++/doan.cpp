#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <iostream>
using namespace std;

int checksonguyen(float number)
{
	int check = -1;
	if (number == (int)number)
	{
		check = 1;
	}
	else
	{
		check = -1;
	}
	return check;
}
void checksonguyento(int number)
{
	int count = 0;
	for (int i = 2; i < number / 2; i++)
	{
		if (number % i == 0)
		{
			count++;
		}
	}
	if (number < 2)
	{
		printf("\nkiem tra so nguyen to: %d "), number;
	}
	else
	{
		if (count == 0)
		{
			printf("\nla so nguyen to: %d "), number;
		}
		else
		{
			printf("\nkhong phai la so nguyen to: %d "), number;
		}
	}
}
void sochinhphuong(int number)
{
	int check = -1;
	for (int i = 2; i <= number / 2; i++)
	{
		if (i * i == number)
		{
			check = 1;
		}
	}
	if (check == 1)
	{
		printf("\nla so chinh phuong: %d", number);
	}
	else
	{
		printf("\nkhong phai la so chinh phuong: %d", number);
	}
}
int uscln(int a, int b)
{
	if (a == 0 || b == 0)
	{
		return a + b;
	}
	while (a != b)
	{
		if (a > b)
		{
			a = a - b;
		}
		else
		{
			b = b - a;
		}
	}
	return a;
}
int bscnn(int a, int b)
{
	return a * b / uscln(a, b);
}
void laisuat(int tienvay)
{
	int tienlai;
	int tiengoc = tienvay / 12;
	int tientra;
	int tiencon;
	tiencon = tienvay;
	printf("\n ky han | tien lai phai tra | tien goc phai tra | so tien phai tra| so tien con lai: ");
	for (int i = 1; i <= 12; i++)
	{
		tienlai = tiencon * 0.05;
		tientra = tiengoc + tienlai;
		tiencon = tiencon - tiengoc;
		printf("\n------------------------------------------------------------------");
		printf("%6d | ", i);
		printf("%12d | ", tienlai);
		printf("%12d | ", tiengoc);
		printf("%16d | ", tientra);
		printf("%15d | ", tiencon);
		printf("\n");
	}
}

int main()
{
	printf("\n-------------------MENU-------------------");
	int chon = 1;
	printf("\n1 - chuc nang so 1: ");
	printf("\n2 - chuc nang so 2: ");
	printf("\n3 - chuc nang so 3: ");
	printf("\n4 - chuc nang so 5: ");
	printf("\n5 - chuc nang so 6: ");
	printf("\n6 - chuc nang so 7: ");
	printf("\n7 - chuc nang so 8: ");
	printf("\n8 - chuc nang so 9: ");
	printf("x - exit");
	scanf(" %d", &chon);
	switch (chon)
	{
	case 1:
	{
		printf("\n chuc nang so 1");
		printf("\nkiem tra so nguyen: ");
		float number = 7;
		int cksonguyen = checksn(7.5);
		if (cksonguyen > 0)
		{
			printf("\nday la so nguyen: %d "), number;
			checksonguyento(number);
			sochinhphuong(number);
		}
		else
		{
			printf("\nday khong phai la so nguyen: %d "), number;
		}

		break;
	}
	case 2:
	{
		printf("\ntim uoc so chung lon nhat: ");
		int usc = uscln(9, 15);
		printf("\nuoc so chung lon nhat la: %d ");
		int bsc = bscnn(9, 15);
		printf("\nboi so chung nho nhat la: %d ");
		break;
	}
	case 3:
	{
		printf("\n chuc nang so 3");
		int T = 150000;
		int giodau, giocuoi, tonggio;
		int tiengio;
		int km4;
		int kmv;
		printf("\ntinh tien cho quan karaoke: ");
		giodau = 16;
		giocuoi = 20;
		tonggio = giocuoi - giodau;
		printf("\ngio cuoi %d - gio dau %d = %d", giocuoi, giodau, tonggio);
		printf("\ntien gio: %d", (tonggio * T));
		if (giodau >= 14 && giodau <= 17)
		{
			printf("\nkhuyen mai khung gio vang 10 phan tram");
			if (tonggio > 3)
			{
				printf("\ntien gio vuot qua 3gio");
				km4 = (tonggio - 3) * 0.3 * T;
				tiengio = tonggio * T - km4;
				printf("so gio vuot: %d => tien km: %d", (tonggio - 3), km4);
			}
			else
			{
				tiengio = tonggio * T;
			}
			kmv = tiengio * 0.1;
			printf("\ntien gio truoc kmv: %d", tiengio);
			printf("\ntien kmv: %d", kmv);
			tiengio = tiengio - kmv;
		}
		else
		{
			if (tonggio > 3)
			{
				printf("\ntien gio vuot qua 3gio");
				km4 = (tonggio - 3) * 0.3 * T;
				tiengio = tonggio * T - km4;
				printf("so gio vuot: %d => tien km: %d", (tonggio - 3), km4);
			}
			else
			{
				tiengio = tonggio * T;
			}
		}

		printf("\ntien phai tra: %d", tiengio);

		break;
	}
	case 4:
	{
		printf("\n chuc nang so 5");
		printf("\nchuc nang doi tien: ");
		int menhgia[] = {500, 200, 100, 50, 20, 10, 5, 2, 1};
		int sotien;
		int sototien;
		printf("\nnhap vao so tien can doi: ");
		scanf("%d", &sotien);
		while (sotien)
		{
			for (int i = 0; i < 9; i++)
			{
				sototien = sotien / menhgia[i];
				if (sototien != 0)
				{
					printf("co %d to %d", sototien, menhgia[i]);
				}
				sotien = sotien - sototien * menhgia[i];
			}
		}
		break;
	}
	case 5:
		printf("\n chuc nang so 6");
		break;
	}

	int main()
	{
		printf("\nlai xuat vay ngan hang: %d");
		int tienvay = 12000000;
		laisuat(tienvay);
		break;
	}
case 6:
	printf("\n chuc nang so 7");
	break;
	void laisuat(int tienvay)
	{
		int tienlai;
		int tiengoc = tienvay / 288;
		int tientra;
		int tiencon;
		tiencon = tienvay;
		printf("\nky han | tien lai phai tra | tien goc phai tra | so tien phai tra| so tien con lai: ");
		for (int i = 1; i <= 288; i++)
		{
			tienlai = tiencon * 7.2;
			tientra = tiengoc + tienlai;
			tiencon = tiencon - tiengoc;
			printf("\n------------------------------------------------------------------");
			peintf("%6d | ", i);
			printf("%12d | ", tienlai);
			printf("%12d | ", tiengoc);
			printf("%16d | ", tientra);
			printf("%15d | ", tiencon);
			printf("\n");
			if (i % 12 == 0)
			{
				nam++;
				printf("\n");
				printf("\n//==========ket thuc %d nam==========: ", nam);
				printf("\n");
			}
		}
	}
	int main()
	{
		printf("\nchuong trinh vay tien mua xe: ");
		int tienxe = 700000000;
		int tienvay = 0;
		tienvay = tienxe * 0.8;
		printf("\ntien vay: %d", tienvay);
		if (tienvay > 500000000)
		{
			printf("\nso tien vay vuot qua muc quy dinh: ");
		}
		else
		{
			laisuat(tienvay);
		}

		break;
	}
case 7:
	printf("\n chuc nang so 8");
	break;
	int main()
	{
		float diem;
		printf("\nNhap vao diem: ");
		scanf("%f", &diem);
		if (diem < 0 || diem > 10)
		{
			printf("\ndiem");
		}
		eles(diem >= 9)
		{
			printf("\nHoc luc xuat xac");
		}
		eles if (diem >= 8)
		{
			printf("\nHoc luc gioi");
		}
		eles if (diem >= 6.5){
				printf("\nHoc luc kha")} eles if (diem >= 5)
		{
			printf("\nHoc luc trung binh");
		}
		eles if (diem >= 3.5)
		{
			printf("\nHoc luc yeu");
		}
		eles
		{
			printf("\nHoc luc kem")
		}
		break;
	}
case 8:
	printf("\n chuc nang so 9");
	break;
	int main()
	{
		printf("\nxay dung game FPOLY-LOTT");
		int randomnumber;
		int numberA, numberB;
		int count = 0;
		printf("moi ban chon so thu nhat:")
				scanf("%d", &numberA);
		printf("moi ban chon so thu hai:")
				sacnf("%d", &numberB);
		srand(time(0));
		printf("\nso may man: ");
		printf("\n---------------------------") for (int i = 0; i < 2; i++)
		{
			randomnumber = rand() % 15;
			printf("%10d", randomnumber);
			if (numberA == randomnumber || numberB == randomnumber)
			{
				count++;
			}
		}
		printf("\n-----------------------") if (count == 0)
		{
			printf("chuc ban may man lan sau");
			else
			{
				if (count == 1)
				{
					printf("chuc mung ban da trung giai nhi");
				}
				else
				{
					printf("chuc mung ban da trung giai nhat");
				}
			}
		}

		break;
	}
}
printf("het");

return 0;
}
