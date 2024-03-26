function checkCookie() {
    let userId = getCookie("userId");
    if (userId != "") tokenLogin(userId, getCookie("token"));
}

function tokenLogin(userId, token){
    $.ajax({
        url: "php/tokenLogin.php",
        type: "post",
        async: false,
        data: {userId: userId, token: token},
        success: function(result){
            if(result == "0"){
                document.getElementById("profileC").classList.remove("hidden");
                document.getElementById("loginC").classList.add("hidden");
                document.getElementById("profile").setAttribute("href", "oldalak/profil.php?id="+userId);
            }else{
                alert(result);
            }
        },
        error: function(error){
            console.error(error);
        }
    });
}

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

function logout(){
    $.ajax({
        url: "../php/misc.php",
        type: "post",
        data: {type: "deleteToken", user: getCookie("userId")}
    });
    deleteCookie("userId");
    deleteCookie("token");
    window.location.replace("../");
}

function load(){
    var movies = new Array();
    $.ajax({
        url: "php/movies.php",
        type: "post",
        async: false,
        success: function(result){
            movies = JSON.parse(result);
        }
    });
    for (let i = 0; i < movies.length; i++) {
        var movieCell = document.createElement("div");
        movieCell.className = "movie-cell";
        movieCell.id = movies[i]['id'];
        movieCell.setAttribute("onclick","movie(this.id)");
    
        var movieLink = document.createElement("a");
        movieLink.className = "movie-item";
    
        var movieImage = document.createElement("img");
        movieImage.className = "posters";
        movieImage.src = movies[i]['image'];
        movieImage.alt = "Description of the image";
        movieLink.appendChild(movieImage);
    
        var movieTitle = document.createElement("p");
        movieTitle.textContent = movies[i]['title'];
        movieLink.appendChild(movieTitle);
    
        movieCell.appendChild(movieLink);
    
        document.getElementsByClassName("movies")[0].appendChild(movieCell);
    }
    checkCookie();
}

function movie(movieId){
    window.location.href = "oldalak/movie.php?id="+movieId;
}