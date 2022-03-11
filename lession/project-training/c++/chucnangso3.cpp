#include <stdio.h>
int main()
{
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

	return 0;
}
