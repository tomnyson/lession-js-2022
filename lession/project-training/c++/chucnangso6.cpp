#include <stdio.h>
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
	printf("\nlai xuat vay ngan hang: %d");
	int tienvay = 12000000;
	laisuat(tienvay);
	return 0;
}
