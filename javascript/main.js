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
    serachBar(true);
}