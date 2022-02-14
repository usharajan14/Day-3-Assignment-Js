var m=60,e=78,soc=56,sci=89,tam=98;
var marks=[60,78,56,89,98];
for(var i=0;i<5;i++)
{
var	per=(marks[i]/100)*100;


if(per<=100 && per>=90)
{
	console.log("O grade");
}
else if(per<90 && per>=80)
{
	console.log("A+ grade");
}
else if(per<80 && per>=70)
{
	console.log("A grade");
}
else if(per<70 && per>=60)
{
	console.log("B+ grade");
}
else if(per<60 && per>=45)
{
	console.log("B grade");
}
else
{
	console.log("Failed!")
}
}

