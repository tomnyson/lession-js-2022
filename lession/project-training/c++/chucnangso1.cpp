#include <stdio.h>
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
int main()
{
	printf("\nkiem tra so nguyen: ");
	float number = 7;
	int cksonguyen = 1;
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

	return 0;
}
