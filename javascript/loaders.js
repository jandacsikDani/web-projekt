function profilesLoad(){
    checkSession();
    var users = new Array();
    $.ajax({
        url: "../php/profiles.php",
        type: "post",
        async: false,

        success: function(result){
            users = JSON.parse(result);
        },
        error: function(xhr, status, error){
            console.error(error);
        }
    });
    for (let i = 0; i < users.length; i++) {
        var nev = users[i]['username'];
        var valami = users[i]['fullname'];

        // Profil generálása
        var profileDiv = document.createElement("div");
        profileDiv.classList.add("profile");
        profileDiv.setAttribute("id", users[i]['id']);
        profileDiv.setAttribute("onclick", "viewProfile(this.id)");

        var imgDiv = document.createElement("div");
        var img = document.createElement("img");
        img.src = "../kepek/profile/default.png";
        img.alt = "";
        imgDiv.appendChild(img);

        var textDiv = document.createElement("div");
        var nameDiv = document.createElement("div");
        nameDiv.textContent = nev;
        var valamiDiv = document.createElement("div");
        valamiDiv.textContent = valami;
        textDiv.appendChild(nameDiv);
        textDiv.appendChild(valamiDiv);

        profileDiv.appendChild(imgDiv);
        profileDiv.appendChild(textDiv);

        // Profil hozzáadása a profileContainer-hez
        var profileContainer = document.getElementsByTagName("main")[0];
        profileContainer.appendChild(profileDiv);
    }
}

function indexLoad(){
    var movies = new Array();
    $.ajax({
        url: "php/v2/movie",
        type: "get",
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

function movieLoad(){
    const movieId = get("id");
    var comments = new Array();
    $.ajax({
        url: "../php/movie.php",
        type: "post",
        async: false,
        data: {id: movieId},
        success: function(result){
            comments = JSON.parse(result);
        }
    });
    for (let i = 0; i < comments.length; i++) {
    var actComment = document.createElement("div");
    actComment.className = "act-comment";

    var listDiv = document.createElement("div");
    listDiv.className = "list";
    actComment.appendChild(listDiv);

    var userDetailDiv = document.createElement("div");
    userDetailDiv.className = "user-detail";
    listDiv.appendChild(userDetailDiv);

    var userImgDiv = document.createElement("div");
    userImgDiv.className = "user-img";
    userDetailDiv.appendChild(userImgDiv);

    var userImg = document.createElement("img");
    userImg.src = "../kepek/profile-pic-example.jpg";
    userImg.alt = "Description of the image";
    userImgDiv.appendChild(userImg);

    var userMetaDiv = document.createElement("div");
    userMetaDiv.className = "user-meta";
    userDetailDiv.appendChild(userMetaDiv);

    var nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.textContent = "@"+comments[i]['username'];
    nameDiv.id = comments[i]['id'];
    nameDiv.setAttribute("onclick", "viewprofile(this.id)");
    userMetaDiv.appendChild(nameDiv);

    var dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.textContent = comments[i]['commentdate']
    userMetaDiv.appendChild(dayDiv);

    var commentTextDiv = document.createElement("div");
    commentTextDiv.className = "comment-text";
    listDiv.appendChild(commentTextDiv);

    var commentP = document.createElement("p");
    commentP.textContent = comments[i]['content'];
    commentTextDiv.appendChild(commentP);

    document.getElementsByClassName("comment-session")[0].appendChild(actComment);
    }
    serachBar();
}

function profileLoad(){
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

function searchResultLoad(){
    serachBar();
}