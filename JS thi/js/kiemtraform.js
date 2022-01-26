
function form1() {
var e1 = document.getElementById("ht").value;
var b1 = document.getElementById("sdt").value;
var c1 = document.getElementById("email").value;
var d1 = document.getElementById("diachi").value;

if(e1=="") {
alert("Vui lòng nhập tên!");

}
if(b1== "") {
alert("Vui lòng nhập sđt!");
return false;
}

if(c1 == "") {
alert("Vui lòng nhập Email!");
return false;
}
if( (c1.length<3) || (c1.indexOf("@")==-1)){
 alert("Vui lòng nhập lại mail!");
 return false;}
if( (c1.length<3) || (c1.indexOf(".")==-1)){
 alert("Email sai cú pháp");
  return false;
}
if(d1 == "") {
alert("Vui lòng nhập địa chỉ");
return false;
}


if ((e1!="")&&(b1!="")&&(c1!="")&&(d1!="")&&(c1.indexOf("@")!=-1)&&(c1.indexOf(".")!=-1)) {
 alert("bạn đã đặt hàng thành công");}
else  
alert("Xin hãy điền đúng thông tin!")
  
return true;
}
