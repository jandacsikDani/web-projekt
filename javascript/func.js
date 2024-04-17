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
    window.location.href = "/web-projekt/oldalak/movie.php?id="+movieId;
}
/*function movie(movieId){
    window.location.href = "movie.php?id="+movieId;
}*/

function viewProfile(profileId){
    window.location.href ="/web-projekt/oldalak/profil.php?id="+profileId;
}

function checkSession(){
    $.ajax({
        url: "/web-projekt/php/getSession.php",
        type: "get",
        data: {userId: getCookie("userId")},
        success: function(result){
            if(result['status'] == 0){
                if(getCookie("userId") == result['userId'] && sessionStorage.getItem('token') == result['session']){
                    document.getElementById("profileC").classList.remove("hidden");
                    document.getElementById("loginC").classList.add("hidden");
                    document.getElementById("profile").setAttribute("href", "/web-projekt/oldalak/profil.php?id="+getCookie("userId"));
                }else{
                    setCookie("userId", "", -1);
                    setCookie("token", "",-1);
                    sessionStorage.removeItem("token");
                }
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

function checkCookie() {
    let userId = getCookie("userId");
    if (userId != "") tokenLogin(userId, getCookie("token"));
}

function tokenLogin(userId, token){
    $.ajax({
        url: "/web-projekt/php/tokenLogin.php",
        type: "get",
        data: {userId: userId, token: token},
        success: function(result){
            if(result['status'] == 0){
                document.getElementById("profileC").classList.remove("hidden");
                document.getElementById("loginC").classList.add("hidden");
                document.getElementById("profile").setAttribute("href", "oldalak/profil.php?id="+userId);
                return true;
            }else{
                alert(result['message']);
            }
        },
        error: function(xhr, status, error){
            console.error(error);
            console.error(status);
        }
    });
    return false;
}

function logout(){
    $.ajax({
        url: "/web-projekt/php/getLogout.php",
        type: "get",
        data: {user: getCookie("userId")},
        success: function(result){
            alert("asd1");
        if(result['status'] == 0){
            alert("asd2");
            deleteCookie("userId");
            deleteCookie("token");
            sessionStorage.clear("token");
            window.location.href("/web-projekt");
        }
        },
        error: function(xhr, status, error){
            console.error(error);
            console.error(status);
        }
    });
}

//get param from url
function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

function viewprofile(profileId){
    window.location.href ="/web-projekt/oldalak/profil.php?id="+profileId;
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