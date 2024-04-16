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

function movie(movieId){
    window.location.href = "oldalak/movie.php?id="+movieId;
}
/*function movie(movieId){
    window.location.href = "movie.php?id="+movieId;
}*/

function viewProfile(profileId){
    window.location.href ="../oldalak/profil.php?id="+profileId;
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

function checkCookie() {
    let userId = getCookie("userId");
    if (userId != "" && sessionStorage.getItem("token") == "") tokenLogin(userId, getCookie("token"));
}

function tokenLogin(userId, token){
    $.ajax({
        url: "php/tokenLogin.php",
        type: "get",
        data: {userId: userId, token: token},
        success: function(result){
            if(result['status'] == 0){
                document.getElementById("profileC").classList.remove("hidden");
                document.getElementById("loginC").classList.add("hidden");
                document.getElementById("profile").setAttribute("href", "oldalak/profil.php?id="+userId);
            }else{
                alert(result['message']);
            }
        },
        error: function(xhr, status, error){
            console.error(error);
            console.error(status);
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

function serachBar(main){
    var url;
    if(main){
        url = "php/movies.php";
    }else{
        url = "../php/movies.php";
    }
    var data = new Array();
    $.ajax({
        url: url,
        type: "post",
        async: false,
        success: function(result){
            data = JSON.parse(result);
        }
    });
    const searchDiv = document.getElementsByClassName('search')[0];
    var datalist = document.createElement('datalist');
    datalist.setAttribute("id", "searchBar");
    for (let i = 0; i < data.length; i++) {
        var option = document.createElement('option');
        option.textContent = data[i]['title'];
        datalist.appendChild(option);
    }
    searchDiv.appendChild(datalist);
}

function gotoMovie(main){
    var url;
    var url2;
    if(main){
        url = "php/searchBar.php";
        url2 = "oldalak/searchresult.php?query=";
    }else{
        url = "../php/searchBar.php";
        url2 = "searchresult.php?query=";
    }
    const data = document.getElementsByClassName('search-input')[0].value;
    var arr = new Array();
    $.ajax({
        url: url,
        type: "post",
        async: false,
        data: {movie: data},
        success: function(result){
            if(result == 1){
                window.location.href = url2+data;
                return;
            }
            arr = JSON.parse(result);
        }
    });
    movie(arr[0][0]);
}

function postNewComment(){
    var comment = document.getElementById('comment').value;
    if(comment == ""){
        return;
    }
    const movieId = get('id');
    $.ajax({
        url: "../php/postNewComment.php",
        type: "post",
        data: {comment: comment, movieId: movieId},
        success: function(result){
            if(result['status'] == 0){
                location.reload();
            }
        },
        error: function(xhr, status, error){
            console.error(error);
            console.error(status);
        }
    });
}