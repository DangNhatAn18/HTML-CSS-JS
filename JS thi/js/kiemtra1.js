function validate1() {
var email = document.getElementById("Email").value;
var pass = document.getElementById("pass").value;
if(email== "") {
alert("Vui lòng nhập Email!");
return false;
}
if(pass == "") {
alert("Vui lòng nhập mật khẩu!");
return false;
}
if((email=="abc@gmail.com")&&(pass="123456"))alert("Bạn đã đăng nhập thành công");
else  
alert("Bạn đã đăng nhập thành công")
  
return true;
}