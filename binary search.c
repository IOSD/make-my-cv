#include<stdio.h>
#include<stdlib.h>
int main()
{
	int beg=0,end=10,mid,item;
	int a[10]={2,4,6,8,10,12,14,16,18,20};
	printf("enter the no. you want to search\n");
	scanf("%d",&item);
//	printf("enter the value of begining and ending index\n");
//	scanf("%d %d",&beg,&end);
	mid=(int)((beg+end)/2);
	mid--;
	while(beg<=end && a[mid]!=item)
	{
		if(item<a[mid])
		{
			end=mid-1;
		}
		else
		{
			beg=mid+1;
		}
		
		mid=(beg+end)/2;
	}
	if(a[mid]==item)
	{
		printf("the index is %d\n",mid);
	}
	else
	{
		printf("no. not found\n");
	}
	main();
