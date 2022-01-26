
function validate() {
var name = document.getElementById("fullname").value;
 var p1 = document.getElementById("password").value;
var p2 = document.getElementById("password-repeat").value;
 var mail = document.getElementById("Email").value;
 var phone = document.getElementById("phone").value;
 var address = document.getElementById("address").value;

if(name == "") {
alert("Vui lòng nhập Họ Tên!");
return false;
}
if(mail == "") {
alert("Vui lòng nhập Email");
return false;
}
if( (mail.length<3) || (mail.indexOf("@")==-1)){
 alert("Vui lòng nhập lại Email!");
 return false;}
if( (mail.length<3) || (mail.indexOf(".")==-1)){
 alert("Email sai cú pháp");
  return false;
}
if((p1 == "")|| (p1.length<6)) {
alert("Vui lòng nhập Mật Khẩu!");
return false;
}
if(p2 == "") {
alert("Vui lòng xác minh Mật Khẩu!");
return false;
}

if ((name!="") &&(mail.indexOf("@")!=-1)&&(mail.indexOf(".")!=-1)&&( p1==p2)) {//dnhap.usn=u;dnhap.pw=p1;dnhap.cp=p2;
 alert("Bạn đã đăng ký thành công");}
else  
alert("Xin hãy điền đúng thông tin!")
return true;
}