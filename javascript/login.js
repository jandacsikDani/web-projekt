document.querySelector(".sign").addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let stayin = document.getElementById("stayin").checked;
    $.ajax({
        url: "../php/login.php",
        type: "post",
        data: {username: username, password: password, keepLogin: stayin},
        success: function(result){
            var back = result.split("\t");
            if(back[0] == "0"){
                setCookie("userId", back[1], 1);
                sessionStorage.setItem("token", back[2]);
                window.location.href = "../";
            }else{
                alert(back[1]);
            }
        },
        error: function(error){
            console.error(error);
        }
    });
})