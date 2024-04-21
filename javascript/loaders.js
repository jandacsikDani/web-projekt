function profilesLoad() {
    checkSession();
    const userId = getCookie("userId");
    $.ajax({
        url: "/web-projekt/php/getAllProfiles.php",
        type: "get",
        success: function (result) {
            var users = new Array();
            users = result;
            for (let i = 0; i < users.length; i++) {
                var nev = users[i]["username"];
                var valami = users[i]["fullname"];

                // Profil generálása
                var profileDiv = document.createElement("div");
                profileDiv.classList.add("profile");
                profileDiv.setAttribute("id", users[i]["id"]);
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
        },
        error: function (xhr, status, error) {
            console.error(error);
            console.error(status);
        },
    });
    if (userId != "" || userId != null) {
        $.ajax({
            url: "../php/getSession.php",
            type: "get",
            data: { userId: userId },
            success: function (result) {
                if (result["status"] == 0) {
                    if (sessionStorage.getItem("token") == result["session"]) {
                        document.getElementById("please-login").style.display =
                            "none";
                        document.getElementsByClassName(
                            "comment-box"
                        )[0].style.display = "block";
                    }
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
                console.error(status);
            },
        });
    }
    serachBar();
}

function indexLoad() {
    $.ajax({
        url: "/web-projekt/php/getIndexMovies.php",
        type: "get",
        success: function (result) {
            var movies = new Array();
            movies = result;
            for (let i = 0; i < movies.length; i++) {
                var movieCell = document.createElement("div");
                movieCell.className = "movie-cell";
                movieCell.id = movies[i]["id"];
                movieCell.setAttribute("onclick", "movie(this.id)");

                var movieLink = document.createElement("a");
                movieLink.className = "movie-item";

                var movieImage = document.createElement("img");
                movieImage.className = "posters";
                movieImage.src = movies[i]["image"];
                movieImage.alt = "Description of the image";
                movieLink.appendChild(movieImage);

                var movieTitle = document.createElement("p");
                movieTitle.textContent = movies[i]["title"];
                movieLink.appendChild(movieTitle);

                movieCell.appendChild(movieLink);

                document
                    .getElementsByClassName("movies")[0]
                    .appendChild(movieCell);
            }
        },
        error: function (xhr, status, error) {
            console.error(error);
            console.error(status);
        },
    });
    checkSession();
    serachBar();
}

function movieLoad() {
    const movieId = get("id");
    const userId = getCookie("userId");
    $.ajax({
        url: "/web-projekt/php/getMovieDetails.php",
        type: "get",
        data: { id: movieId },
        success: function (result) {
            document.title = result[0]["title"];
            document.getElementsByClassName("intro")[0].style.backgroundImage = "url("+result[0]["coverimage"]+ ")";
            document.getElementsByClassName("intro-title")[0].innerText = result[0]["title"];
            document.getElementsByClassName("desc-title")[0].innerText = result[0]["title"];
            document.getElementsByClassName("desc-script")[0].innerText = result[0]["description"];
        },
        error: function (xhr, status, error) {
            console.error(error);
            console.error(status);
        },
    });
    $.ajax({
        url: "../php/getMovieComments.php",
        type: "get",
        data: { id: movieId },
        success: function (result) {
            comments = result;
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
                userImg.src = result[i]["profileimage"];
                userImg.alt = result[i]["username"] + " profilkélpe";
                userImgDiv.appendChild(userImg);

                var userMetaDiv = document.createElement("div");
                userMetaDiv.className = "user-meta";
                userDetailDiv.appendChild(userMetaDiv);

                var nameDiv = document.createElement("div");
                nameDiv.className = "name";
                nameDiv.textContent = "@" + result[i]["username"];
                nameDiv.id = result[i]["id"];
                nameDiv.setAttribute("onclick", "viewprofile(this.id)");
                userMetaDiv.appendChild(nameDiv);

                var dayDiv = document.createElement("div");
                dayDiv.className = "day";
                dayDiv.textContent = result[i]["commentdate"];
                userMetaDiv.appendChild(dayDiv);

                var commentTextDiv = document.createElement("div");
                commentTextDiv.className = "comment-text";
                listDiv.appendChild(commentTextDiv);

                var commentP = document.createElement("p");
                commentP.textContent = result[i]["content"];
                commentTextDiv.appendChild(commentP);

                document
                    .getElementsByClassName("comment-session")[0]
                    .appendChild(actComment);
            }
            $.ajax({
                url: "/web-projekt/php/getProfileDetails.php",
                type: "get",
                data: {id: userId},
                success: function(result){
                    document.getElementById("userpic").src = result[0]['profileimage'];
                }
            });
            serachBar();
        },
        error: function (xhr, status, error) {
            console.error(error);
            console.error(status);
        },
    });
    checkSession();
    if (userId != "" || userId != null) {
        $.ajax({
            url: "../php/getSession.php",
            type: "get",
            data: { userId: userId },
            success: function (result) {
                if (result["status"] == 0) {
                    if (sessionStorage.getItem("token") == result["session"]) {
                        document.getElementById("please-login").style.display = "none";
                        document.getElementsByClassName("comment-box")[0].style.display = "block";
                    }
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
                console.error(status);
            },
        });
    }
    serachBar();
}

function profileLoad() {
    const profileId = get("id");
    $.ajax({
        url: "/web-projekt/php/getProfileDetails.php",
        type: "get",
        data: { id: profileId },
        success: function (result) {
            document.title = "@" + result[0]["username"] + " profilja";
            document.getElementsByClassName("profile-pic")[0].src = result[0]["profileimage"];
            document.getElementsByClassName("full-name")[0].innerText = result[0]["fullname"];
            document.getElementsByClassName("username")[0].innerText = "@" + result[0]["username"];
        },
        error: function (xhr, status, error) {
            console.error(error);
            console.error(status);
        },
    });
    $.ajax({
        url: "/web-projekt/php/getProfileStats.php",
        type: "get",
        data: { id: profileId },
        success: function (result) {
            document.getElementById("comment").innerHTML = result["comment"];
            document.getElementById("review").innerHTML = result["rate"];
        },
        error: function (xhr, status, error) {
            console.error(error);
            console.error(status);
        },
    });
    if (get("id") == getCookie("userId")) {
        $.ajax({
            url: "/web-projekt/php/getSession.php",
            type: "get",
            data: { userId: getCookie("userId") },
            success: function (result) {
                if (result["status"] == 0) {
                    if (getCookie("userId") == result["userId"] && sessionStorage.getItem("token") == result["session"]) {
                        document.getElementById("profile").setAttribute("href", "");
                        document.getElementById("profile").innerHTML = "Kijelentkezés";
                        document.getElementById("profile").setAttribute("onclick", "logout()");
                        document.getElementById("profileC").classList.remove("hidden");
                        document.getElementById("loginC").classList.add("hidden");
                        if(getCookie("userId") == get("id")){
                            document.getElementsByClassName("change")[0].classList.remove("hidden");
                        }
                    }
                    if(getCookie("userId") != get("id") && sessionStorage.getItem("token") == result["session"]){
                        document.getElementById("loginC").classList.add("hidden");
                        document.getElementById("profileC").classList.remove("hidden");
                        document.getElementById("profile").setAttribute("onclick", "viewProfile(this.id)");
                    }
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
                console.error(status);
            },
        });
    }
    serachBar();
}



function searchResultLoad() {
    serachBar();
}

function loadTopGenres() {
    
    $.ajax({
        url: '/web-projekt/php/getTopGenres.php', 
        method: 'GET',
        success: function(response) {
            
            const genres = response.genres;

            const reviewsContainer = document.querySelector('.reviews-container');

            reviewsContainer.innerHTML = '';

            genres.forEach(genre => {
                
                const reviewCategoryDiv = document.createElement('div');
                reviewCategoryDiv.className = 'review-categories';

                
                const genreTitleDiv = document.createElement('div');
                genreTitleDiv.className = 'review-title';
                const genreTitleP = document.createElement('p');
                genreTitleP.textContent = `Legjobban Értékelt ${genre} Filmek`; 
                genreTitleDiv.appendChild(genreTitleP);

                
                reviewCategoryDiv.appendChild(genreTitleDiv);

                
                const reviewElementsDiv = document.createElement('div');
                reviewElementsDiv.className = 'review-elements';

                
                $.ajax({
                    url: "/web-projekt/php/getTopMoviesByGenre.php",
                    method: 'GET',
                    data: {
                        genre: genre
                    },
                    success: function(response) {
                        
                        const movies = response.movies;

                        
                        movies.forEach(movie => {
                            
                            const movieLink = document.createElement('a');
                            movieLink.href = `movie.php?id=${movie.id}`; 

                            
                            const movieDiv = document.createElement('div');
                            
                            const movieImage = document.createElement('img');
                            movieImage.className = 'posters';
                            movieImage.src = '../' + movie.image;
                            movieImage.alt = `A ${movie.title} képe`;
                            movieDiv.appendChild(movieImage);
                            
                            const movieTitleP = document.createElement('p');
                            movieTitleP.textContent = movie.title; 
                            movieDiv.appendChild(movieTitleP);

                            const reviewRatingDiv = document.createElement('div');
                            reviewRatingDiv.className = 'review-rating';

                            
                            for (let i = 0; i < 5; i++) {
                                const starSpan = document.createElement('span');
                                starSpan.className = 'fa fa-star';

                                
                                if (i < movie.rating) {
                                    starSpan.classList.add('checked');
                                } else {
                                    starSpan.classList.add('unchecked');
                                }

                                
                                reviewRatingDiv.appendChild(starSpan);
                            }

                            movieDiv.appendChild(reviewRatingDiv);
                            movieLink.appendChild(movieDiv);
                            reviewElementsDiv.appendChild(movieLink);
                        });
                    },
                    error: function(xhr, status, error) {
                        console.error(`Hiba genre lekeres kozben ${genre}:`, error);
                    }
                });
          
                reviewCategoryDiv.appendChild(reviewElementsDiv);         
                reviewsContainer.appendChild(reviewCategoryDiv);
            });
        },
        error: function(xhr, status, error) {
            console.error("Hiba genre lekeres kozben:", error);
        }
    });
}






