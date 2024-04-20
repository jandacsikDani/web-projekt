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
        url: "/web-projekt/php/getLogout.php",
        type: "get",
        data: {user: getCookie("userId")},
        success: function(result){
            if(result['status'] == 0){
                deleteCookie("userId");
                deleteCookie("token");
                sessionStorage.clear("token");
                window.location.href("/web-projekt");
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

//get param from url
function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

function viewprofile(profileId){
    window.location.href ="/web-projekt/oldalak/profil.php?id="+profileId;
}

function serachBar(){
    $.ajax({
        url: "/web-projekt/php/getSearchBar.php",
        type: "get",
        success: function(result){
            if(result['status'] == 0){
                const searchDiv = document.getElementsByClassName('search')[0];
                var datalist = document.createElement('datalist');
                datalist.setAttribute("id", "searchBar");
                for (let i = 0; i < result["searchresult"].length; i++) {
                    var option = document.createElement('option');
                    option.textContent = result["searchresult"][i]['title'];
                    datalist.appendChild(option);
                }
                searchDiv.appendChild(datalist);
            }
        },
        error: function(xhr, status, error){
            console.error(error);
            console.error(status);
        }
    });
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

function filter(elementId){
    document.getElementById(elementId).classList.toggle("active");
    var elements = new Array();
    elements = document.getElementsByClassName('active');
    var filters = new Array();
    for (let i = 0; i < elements.length; i++) {
        filters.push(elements[i].id);
    }
    if(filters != undefined){
        $.ajax({
            url: "/web-projekt/php/getFilteredMovies.php",
            type: "get",
            data: {filter: filters},
            success: function(result){
                if(result['status'] == 0){
                    document.getElementsByClassName('movies')[0].innerHTML = "";
                    for (let i = 0; i < result['content'].length; i++) {
                        var movieCell = document.createElement("div");
                        movieCell.className = "movie-cell";
                        movieCell.id = result['content'][i]['id'];
                        movieCell.setAttribute("onclick","movie(this.id)");
            
                        var movieLink = document.createElement("a");
                        movieLink.className = "movie-item";
            
                        var movieImage = document.createElement("img");
                        movieImage.className = "posters";
                        movieImage.src = result['content'][i]['image'];
                        movieImage.alt = "Description of the image";
                        movieLink.appendChild(movieImage);
            
                        var movieTitle = document.createElement("p");
                        movieTitle.textContent = result['content'][i]['title'];
                        movieLink.appendChild(movieTitle);
            
                        movieCell.appendChild(movieLink);
            
                        document.getElementsByClassName("movies")[0].appendChild(movieCell);
                    }
                }else{
                    document.getElementsByClassName('movies')[0].innerHTML = "";
                    $.ajax({
                        url: "/web-projekt/php/getIndexMovies.php",
                        type: "get",
                        success: function(result){
                            var movies = new Array();
                            movies = result;
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
                        },
                        error: function(xhr, status, error){
                            console.error(error);
                            console.error(status);
                        }
                    });
                }
            },
            error: function(xhr, status, error){
                console.error(error);
                console.error(status);
            }
        });
    }
}

function changeUserDataButton(){
    document.getElementById("change-data").classList.toggle("open");
}

function uploadUserData(){
    if(confirm("Biztos frissíteni szeretnéd az alábbi adatokat?")){
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var repassword = document.getElementById("repassword").value;
        if(password == repassword){
            $.ajax({
                url: "/web-projekt/php/postUpdateUserData.php",
                type: "post",
                data: {username: username, email: email, password: password},
                success: function(result){
                    if(result['status'] == 0){
                        alert("Az adatok sikeresen frissítésre kerültek.");
                        document.getElementById("username").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("password").value = "";
                        document.getElementById("repassword").value = "";
                    }else{
                        alert("Az adatok frissítése közben hiba lépett fel, kérjük próbáld újra később.");
                    }
                },
                error: function(xhr, status, error){
                    console.error(error);
                    console.error(status);
                }
            });
        }else{
            alert("Nem eggyznek a jelszavak");
        }
    }
}

function uploadUserPic(){
    if(confirm("Biztos megszeretnéd változtatni a profilképed?")){
        var file_data = $('#file').prop('files')[0];   
        var form_data = new FormData();                  
        form_data.append('file', file_data);                      
        $.ajax({
            url: '/web-projekt/php/postUploadUserPic.php',
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,                         
            type: 'post',
            success: function(result){
                alert(result['message']);
            },
            error: function(xhr, status, error){
                console.error(error);
                console.error(status);
            }
        });
    }
}