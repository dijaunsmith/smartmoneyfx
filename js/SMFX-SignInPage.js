var correctUserName = "Di-Jaun";
var correctPassWord = "Dij2hot";

function verifyUser(){
var userName = document.getElementById('userName').value;
var passWord = document.getElementById('passWord').value;
if(userName == correctUserName & passWord != correctPassWord){
    alert("Your username is correct. However, your password is incorrect.");
} else if (userName == correctUserName & passWord == correctPassWord){
    alert("You have succesfully logged in!");
}
}