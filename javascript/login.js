function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

document.querySelector(".sign").addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let stayin = document.querySelector('#stayin:checked').value;
    console.log(stayin);
    $.ajax({
        url: "../php/login.php",
        type: "post",
        data: {username: username, password: password, keppLogin: stayin},
        success: function(result){
            var back = result.split("\t");
            if(back[0] == "0"){
                setCookie('userId', back[1], 1);
                //window.location.href = "../";
            }else{
                alert(back[1]);
            }
        },
        error: function(error){
            console.error(error);
        }
    });
})