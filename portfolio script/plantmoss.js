function myFunction() {
   var light = document.getElementById("light"); 
   var dark = document.getElementById("dark"); 


   if(dark.style.display=="none"){
        light.style.display="none"; 
        dark.style.display="block"; 
   }else{
        light.style.display="block"; 
        dark.style.display="none"; 
   }
}
function myFunction1()
{
var img1="light.png";
var img2="dark.png";
var imgelement= document.getElementById('mybutton');
	if(imgelement.src.match("light.png"))
	{
		imgelement.src=img2;
		document.body.style.backgroundColor="#CCE4C0";
	}
else
	{
		imgelement.src=img1;
		document.body.style.backgroundColor="#E5E6CE";
	}
}