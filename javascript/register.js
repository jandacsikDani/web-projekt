document.querySelector(".sign").addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    if(password == repassword){
        $.ajax({
            url: "/web-projekt/php/register.php",
            type: "post",
            data:{username: username, fullname: fullname, email: email, password: password},
            success: function(result){
                if(result['status'] == 0){
                    setCookie("userId", result['userid'], 1);
                    setCookie("token", result['token'], 1);
                    sessionStorage.setItem("token", result['session']);
                    alert(result['message']);
                    window.location.href = "../";
                }else{
                    alert(result['message']);
                }
            },
            error: function(xhr, status, error){
                console.error(error);
                console.error(status);
            }
        });
    }else{
        alert("A jelszavak nem eggyeznek!");
    }
})