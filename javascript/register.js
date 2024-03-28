document.querySelector(".sign").addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    if(password == repassword){
        $.ajax({
            url: "../php/register.php",
            type: "post",
            data:{username: username, fullname: fullname, email: email, password: password},
            success: function(result){
                var back = result.split("\t");
                if(back[0] == "0"){
                    setCookie("userId", back[2], 1);
                    setCookie("token", back[3], 1);
                    sessionStorage.setItem("token", back[4]);
                    alert(back[1]);
                    //window.location.href = "../";
                }else{
                    alert(back[1]);
                }
            },
            error: function(error){
                console.error(error);
            }
        });
    }else{
        alert("A jelszavak nem eggyeznek!");
    }
})