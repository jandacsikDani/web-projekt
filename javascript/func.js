function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
    document.cookie = cname + "=" + " ;Thu, 18 Dec 2013 12:00:00 UTC ;path=/";
}

function checkSession(){
    $.ajax({
        url: "../php/misc.php",
        type: "post",
        data: {type: "checkSession", session: sessionStorage.getItem("token")},
        success: function(result){
            if(result == 0){
                document.getElementById("profileC").classList.remove("hidden");
                document.getElementById("loginC").classList.add("hidden");
                document.getElementById("profile").setAttribute("href", "profil.php?id="+getCookie("userId"));
            }
        }
    });
}

function logout(){
    $.ajax({
        url: "../php/misc.php",
        type: "post",
        data: {type: "deleteToken", user: getCookie("userId")}
    });
    deleteCookie("userId");
    deleteCookie("token");
    sessionStorage.clear("token");
    window.location.href("../index.html");
}

function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

function viewprofile(profileId){
    window.location.href ="../oldalak/profil.php?id="+profileId;
}