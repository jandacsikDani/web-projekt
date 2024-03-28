function load(){
    checkSession();
    const profileId = get('id');
    var data = new Array();
    $.ajax({
        url: "../php/profil.php",
        type: "post",
        async: false,
        data: {id: profileId},
        success: function(result){
            data = JSON.parse(result);
        }
    });
    //document.getElementById("review").innerHTML = data[0]['review'];
    document.getElementById("comment").innerHTML = data[0]['comment'];
    if(profileId == getCookie("userId")){
        alert(profileId + getCookie("userId"));
        document.getElementById("profile").setAttribute("href", "");
        document.getElementById("profile").innerHTML = "Kijelentkezés";
        document.getElementById("profile").setAttribute("onclick","logout()");
    }
}