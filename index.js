$(document).ready(function(){
    
    var button=$("#button")
    var loginData = localStorage.getItem("session-details")===null?[]:JSON.parse(localStorage.getItem("session-details"));
    var obj={name:"",password:"",status:false};
    $(button).click(function(e){
        e.preventDefault();
        var username=$(".username");
       var password=$(".password");
        obj.name=username;
        obj.password=password;
        if(username.val()==password.val()){
            location.href = "./home.html";
            console.log(123)
            obj.status=true;
            localStorage.setItem("session-details",JSON.stringify(obj));
        }
        else{
            alert("Incorrect password");
            console.log(obj.name);
        }
    })
    
})