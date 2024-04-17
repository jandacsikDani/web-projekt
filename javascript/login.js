document.querySelector(".sign").addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let stayin = document.getElementById("stayin").checked;
    $.ajax({
        url: "/web-projekt/php/login.php",
        type: "post",
        data: {username: username, password: password, keepLogin: stayin},
        success: function(result){
            if(result['status'] == 0){
                sessionStorage.setItem("token", result['session']);
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
})