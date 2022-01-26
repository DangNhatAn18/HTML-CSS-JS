    
function tongtien()
{ var x = document.getElementById("a").innerHTML; 
     y=parseInt(x);
  z=document.getElementById("b").value; 
    t= parseInt(z);
 var h = (y*t);
document.getElementById("thu").innerHTML="Tổng tiền : "+h+"đ";
  

}