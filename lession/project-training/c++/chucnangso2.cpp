#include <stdio.h>
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
int main()
{
	printf("\ntim uoc so chung lon nhat: ");
	int usc = uscln(2, 6);
	printf("\nuoc so chung lon nhat la: %d ");
	int bsc = bscnn(2, 6);
	printf("\nboi so chung nho nhat la: %d ");
	return 0;
}
